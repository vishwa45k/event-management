const express = require("express");
const {
  updateEvent,
  deleteEventById,
  createDepartmentWithEvents,
  getEvents,
  getDepartmentEvents,
} = require("../controllers/events.controller");
const { authorizeRoles } = require("./../middleware/auth.middleware.js");
const app = express.Router();
app.post("/add-events", createDepartmentWithEvents);
app.put("/events/:id", updateEvent);
app.delete("/events/:id", authorizeRoles("staff"), deleteEventById);
app.get("/events/:department", getDepartmentEvents);
app.get("/get-events", getEvents);

module.exports = app;
