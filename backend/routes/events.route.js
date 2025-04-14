const express = require("express");
const {
  updateEvent,
  deleteEventById,
  createDepartmentWithEvents,
  getEvents,
  getDepartmentEvents,
  getEventById,
} = require("../controllers/events.controller");
const {
  authorizeRoles,
  authenticateUser,
} = require("./../middleware/auth.middleware.js");
const app = express.Router();
app.post(
  "/add-events",
  authenticateUser,
  authorizeRoles("staff"),
  createDepartmentWithEvents
);
app.put("/events/:id", authenticateUser, updateEvent);
app.delete(
  "/events/:id",
  authenticateUser,
  authorizeRoles("staff"),
  deleteEventById
);
app.get("/events/:department", authenticateUser, getDepartmentEvents);
app.get("/get-events", getEvents);

// app.get("/get-events/:departmentName/:eventId", getEventById);
app.get("/get-events/:eventId", getEventById);

module.exports = app;
