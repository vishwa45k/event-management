const express = require("express");
const {
  updateEvent,
  deleteEventById,
  createDepartmentWithEvents,
  getEvents,
} = require("../controllers/events.controller");

const app = express.Router();
app.post("/add-events", createDepartmentWithEvents);
app.put("/events/:id", updateEvent);
app.delete("/events/:id", deleteEventById);

app.get("/get-events", getEvents);

module.exports = app;
