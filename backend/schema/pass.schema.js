const mongoose = require("mongoose");
const { validate } = require("../models/models");
const validator = require("validator");
module.exports = mongoose.Schema({
  passId: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "email is inValid"],
  },
  college: {
    type: String,
    required: true,
  },
  passName: {
    type: String,
    required: true,
    enum: {
      values: ["Technical Fest", "Cultural Fest", "Sports Meet"],
      message: "Invalid pass request",
    },
  },
  department: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  passCount: {
    type: Number,
    required: true,
  },
});
