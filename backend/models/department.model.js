const mongoose = require("mongoose");
const departmentSchema = require("../schema/department.schema.js");
module.exports = new mongoose.model(
  "department",
  departmentSchema,
  "department-events"
);
