const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  passCount: {
    type: Number,
    required: true,
  },
});
