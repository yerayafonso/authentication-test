require("dotenv").config();
// importing the mongoose module
const mongoose = require("mongoose");

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

const PORT = 8080;

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(PORT, function () {
  console.log(`🚀 Listening on port ${PORT}`);
});
console.log("MONGO_URI:", process.env.MONGO_URI);
// connecting to the database
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connection is established successfully! 🎉");
});
