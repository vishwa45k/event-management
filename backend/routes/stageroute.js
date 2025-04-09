const express = require("express");
const router = express.Router();
const Stage = require("../models/stage.js");

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const event = new Stage(req.body);
    await event.save();
    return res.status(200).json(event);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/eventType", async (req, res) => {
  try {
    const events = await Stage.distinct("eventType");
    res.status(200).json(events.map((Type) => ({ eventType: Type })));
  } catch (error) {
    console.error("error :", error.message);
    res.status(500).json({ error: error.message });
  }
});
router.get("/type", async (req, res) => {
  try {
    const { event } = req.query;
    console.log("Event Type query param:", event);

    if (!event) {
      return res.status(400).json({ error: "Event type is required" });
    }

    const events = await Event.find({ eventType: event }); 
    console.log(events);
    return res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Error fetching events" });
  }
});

module.exports = router;
