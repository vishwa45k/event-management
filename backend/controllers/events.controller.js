const departmentModel = require("../models/department.model");
const Event = require("../models/models");

const createDepartmentWithEvents = async (req, res) => {
  try {
    const {
      id,
      departmentName,
      cardName,
      shortName,
      departmentDescription,
      coordinatorName,
      coordinatorContactPhone,
      coordinatorEmail,
      technicalEventCount,
      nonTechnicalEventCount,
      workshop,
      events,
    } = req.body;

    if (
      !departmentName ||
      !description ||
      !coordinatorName ||
      !coordinatorContactPhone ||
      !coordinatorEmail ||
      !events
    ) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided" });
    }

    const newDepartment = new departmentModel({
      id,
      departmentName,
      cardName,
      shortName,
      departmentDescription,
      coordinatorName,
      coordinatorContactPhone,
      coordinatorEmail,
      technicalEventCount,
      nonTechnicalEventCount,
      workshop,
      events,
    });

    const savedDepartment = await newDepartment.save();
    res.status(201).json(savedDepartment);
  } catch (error) {
    console.error("Error saving department data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEvents = async (req, res) => {
  try {
    const deparment = await departmentModel.find();
    if (deparment.length === 0) {
      return res.status(200).json({ message: "No Department Avaiable" });
    }
    return res.status(200).json(deparment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;

  console.log(req.params);
  try {
    const event = await Event.findOne({ _id: id });
    if (!event) {
      return res.status(404).json({ message: "event not found" });
    }
    await Event.findOneAndUpdate({ _id: id }, req.body);
    return res.status(200).json({ message: "course updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const events = await Event.findOne({ _id: id });
    if (!events) {
      return res.status(404).json({ message: "event not found" });
    }
    await Event.findOneAndDelete({ _id: id });
    return res.status(200).json({ message: "event removed successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateEvent,
  deleteEventById,
  getEvents,
  createDepartmentWithEvents,
};
