const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const fileModel = require("./models/fileModel");

const app = express();
app.use(express.static("views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//uploading the file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // File naming convention
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res, next) => {
  
  //saving path to mongodb
  const file = new fileModel({
    path: req.file.path,
  });
  await file.save();

  
  res.send("image uploaded");
});

module.exports = app;
