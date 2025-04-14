const express = require("express");
const Event = require("../models/models.js");
const router = express.Router();

router.post("/add-event", async (req, res) => {
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
      coordinators,
      studentCoordinators,
    } = req.body;

    if (
      departmentName == null ||
      eventName == null ||
      url == null ||
      description == null ||
      numTechnicalEvents == null ||
      numNonTechnicalEvents == null ||
      numWorkshops == null ||
      type == null ||
      eventLocation == null ||
      date == null ||
      time == null ||
      price == null
    ) {
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
      coordinators,
      studentCoordinators,
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error("Error while creating event:", error);
    res.status(500).json({ error: error.message });
  }
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

router.get("/department", async (req, res) => {
  try {
    const department = await Event.find();
    if (department.length === 0) {
      return res.status(200).json({ message: "No Departments avaiable" });
    }
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/events", async (req, res) => {
  try {
    const { department } = req.query;
    console.log("Department query param:", department);

    if (!department) {
      return res.status(400).json({ error: "Department is required" });
    }

    const events = await Event.find({ departmentName: department });
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
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
