const mongoose = require("mongoose");

const coordinatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
});

const eventSchema = new mongoose.Schema({
  departmentName: { type: String, required: true },
  eventName: { type: String, required: true },
  type: {
    type: String,
    enum: ["technical", "non-technical", "workshop"],
    required: true,
  },
  technicalCount: { type: Number },
  NontechnicalCount: { type: Number },
  workshopCount: { type: Number },
  url: { type: String, required: false },
  description: { type: String, required: true },
  eventLocation: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  price: { type: Number, required: true },
  rules: [{ type: String }],
  coordinators: [coordinatorSchema],
  studentCoordinators: [coordinatorSchema],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
