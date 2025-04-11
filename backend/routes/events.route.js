const express = require("express");
const {
  updateEvent,
  deleteEventById,
} = require("../controllers/events.controller");

const app = express.Router();

app.put("/events/:id", updateEvent);
app.delete("/events/:id", deleteEventById);

module.exports = app;
