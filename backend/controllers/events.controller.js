const departmentModel = require("../models/department.model");
const Event = require("../models/models");
const { eventNames } = require("../schema/user.schema");

const createDepartmentWithEvents = async (req, res) => {
  try {
    const {
      departmentName,
      eventName,
      eventDescription,
      eventPrize,
      eventTime,
      eventVenue,
      rules,
      coordinators,
      studentCoordinators,

      type,
    } = req.body;

    const newEvent = {
      eventName,
      eventDescription,
      eventPrize,
      eventDescription,
      eventTime,
      eventVenue,
      eventRules: rules,
      eventStaffCoordinator: coordinators,
      studentCoordinator: studentCoordinators,
      eventType: type,
    };

    var department = await departmentModel.findOne({ departmentName });
    if (!department) {
      department = new departmentModel({
        departmentName,
        events: [newEvent],
      });
    } else {
      department.events.push(newEvent);
    }

    await department.save();

    return res.status(201).json(department);
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
  const updatedEventData = req.body;

  try {
    const department = await departmentModel.findOne({ "events._id": id });
    if (!department) {
      return res
        .status(404)
        .json({ message: "Event not found in any department" });
    }

    const event = department.events.id(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    Object.assign(event, updatedEventData);

    await department.save();

    return res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    console.error("Error updating event:", error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const department = await departmentModel.findOne({ "events._id": id });

    if (!department) {
      return res.status(404).json({ message: "Event not found" });
    }

    department.events = department.events.filter(
      (event) => event._id.toString() !== id
    );

    await department.save();

    return res.status(200).json({ message: "Event removed successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    return res.status(500).json({ message: error.message });
  }
};

const getDepartmentEvents = async (req, res) => {
  const { department } = req.params;
  try {
    const departmentFound = await departmentModel.findOne({
      departmentName: department,
    });
    console.log(department ? "Found" : "Not Found");
    if (!departmentFound) {
      return res.status(404).json({ message: "Department not found" });
    }
    console.log(departmentFound);
    return res.status(200).json({
      message: "Department found",
      department: departmentFound,
    });
  } catch (error) {
    console.error("Error fetching department:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getEventById = async (req, res) => {
  const { eventId } = req.params;

  try {
    const departmentFound = await departmentModel.findOne({
      "events._id": eventId,
    });

    if (!departmentFound) {
      return res.status(404).json({ message: "department not found" });
    }
    const event = departmentFound.events.id(eventId);
    if (!event) {
      return res.status(404).json({ message: "event not found" });
    }
    return res.status(200).json({
      message: "event found",
      event: event,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEventById,
  getDepartmentEvents,
  updateEvent,
  deleteEventById,
  getEvents,
  createDepartmentWithEvents,
};
