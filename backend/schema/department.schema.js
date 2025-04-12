const mongoose = require("mongoose");

const coordinatorSchema = new mongoose.Schema({
  name: String,
  contact: String,
});

const eventSchema = new mongoose.Schema({
  posterUrl: String,
  eventThumbnail: String,
  eventName: String,
  eventType: String,
  eventTime: String,
  eventDescription: String,
  eventVenue: String,
  eventRounds: [String],
  eventPrize: [String],
  eventRules: [String],
  eventStaffCoordinator: {
    name: String,
    contact: String,
  },
  studentCoordinator: [coordinatorSchema],
});

const departmentSchema = new mongoose.Schema({
  departmentName: String,
  coordinatorName: String,
  coordinatorContactPhone: String,
  coordinatorEmail: String,
  events: [eventSchema],
});

module.exports = departmentSchema;
