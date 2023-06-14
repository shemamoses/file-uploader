const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 1000;
const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`server running successfully on port ${port}`);
});
