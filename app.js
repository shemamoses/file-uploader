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

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", (req, res) => {
  res.send("this is upload route");
});

module.exports = app;
