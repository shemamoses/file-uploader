const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const fileSchema = new mongoose.Schema({
  name: String,
  path: String,
});

module.exports = mongoose.model("File", fileSchema);
