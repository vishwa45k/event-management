const Event = require("../models/models");

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

module.exports = { updateEvent, deleteEventById };
