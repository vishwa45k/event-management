const express = require("express");
const Event = require("../models/models.js");
const router = express.Router();
router.post("/events", async (req, res) => {
  try {
    const {
      departmentName,
      eventName,
      url,
      description,
      numTechnicalEvents,
      numNonTechnicalEvents,
      numWorkshops,
      type,
      eventLocation,
      date,
      time,
      price,
      rules,
    } = req.body;

    if (
      !departmentName ||
      !eventName ||
      !url ||
      !description ||
      !numTechnicalEvents ||
      !numNonTechnicalEvents ||
      !numWorkshops ||
      !type ||
      !eventLocation ||
      !date ||
      !time ||
      !price
    ) {
      console.log({ error: "All fields are required" });
      return res.status(400).json({ error: "All fields are required" });
    }

    const event = new Event({
      departmentName,
      eventName,
      url,
      description,
      technicalCount: numTechnicalEvents,
      NontechnicalCount: numNonTechnicalEvents,
      workshopCount: numWorkshops,
      type,
      eventLocation,
      date,
      time,
      price,
      rules,
    });

    // ✅ Save to DB
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error("Error while creating event:", error);
    res.status(500).json({ error: error.message });
  }
  // res.send("hello ");
});

router.get("/departments", async (req, res) => {
  try {
    const departments = await Event.distinct("departmentName");
    res.status(200).json(departments.map((name) => ({ departmentName: name })));
  } catch (error) {
    console.error("Error fetching departments:", error.message);
    res.status(500).json({ error: error.message });
  }
});
// router.get("/events", async (req, res) => {
//   try {
//     const { department } = req.query;
//     const events = await Event.find({ departmentName: department });
//     res.json(events);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching events" });
//   }
// });
router.get("/events", async (req, res) => {
  try {
    const { department } = req.query;
    console.log("Department query param:", department); // Debugging log

    if (!department) {
      return res.status(400).json({ error: "Department is required" });
    }

    const events = await Event.find({ departmentName: department });
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error); // Additional logging
    res.status(500).json({ error: "Error fetching events" });
  }
});
router.delete("/event", async (req, res) => {
  try {
    const { departmentName, eventName } = req.body;

    if (!departmentName || !eventName) {
      return res
        .status(400)
        .json({ error: "Both departmentName and eventName are required" });
    }

    const deletedEvent = await Event.findOneAndDelete({
      departmentName,
      eventName,
    });

    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res
      .status(200)
      .json({ message: "Event deleted successfully", deletedEvent });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

