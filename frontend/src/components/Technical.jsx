import React, { useState, useEffect } from "react";
import axios from "axios";

function TechnicalEvent() {
  const [rules, setRules] = useState([]);

  const [coordinators, setCoordinators] = useState([]);
  const [studentCoordinators, setStudentCoordinators] = useState([]);
  const [newCoordinator, setNewCoordinator] = useState({
    name: "",
    number: "",
  });
  const [newStudentCoordinator, setNewStudentCoordinator] = useState({
    name: "",
    number: "",
  });
  const [newRule, setNewRule] = useState("");

  const [newData, setData] = useState({
    departmentName: "",
    eventName: "",
    type: "technical",
    url: "",
    eventDescription: "",
    eventVenue: "",
    eventTime: "",
    eventPrize: "",
    date: new Date().getTime,
    rules: [],
  });

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/departments", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDepartmentList(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  // Handle input changes
  const handleData = (e) =>
    setData({ ...newData, [e.target.name]: e.target.value });
  const handleCoordinatorChange = (e) =>
    setNewCoordinator({ ...newCoordinator, [e.target.name]: e.target.value });
  const handleStudentCoordinatorChange = (e) =>
    setNewStudentCoordinator({
      ...newStudentCoordinator,
      [e.target.name]: e.target.value,
    });

  // Add coordinator
  const addCoordinator = () => {
    if (!newCoordinator.name || !newCoordinator.number)
      return alert("Enter both name and number");
    setCoordinators([...coordinators, newCoordinator]);
    setNewCoordinator({ name: "", number: "" });
  };

  // Add student coordinator
  const addStudentCoordinator = () => {
    if (!newStudentCoordinator.name || !newStudentCoordinator.number)
      return alert("Enter both name and number");
    setStudentCoordinators([...studentCoordinators, newStudentCoordinator]);
    setNewStudentCoordinator({ name: "", number: "" });
  };

  // Add rule
  const addRule = () => {
    if (!newRule) return alert("Enter a rule");
    setRules([...rules, newRule]);
    setNewRule("");
  };

  // Handle form submission to add an event
  const addEvent = async (e) => {
    e.preventDefault();
    const eventData = {
      ...newData,
      eventPrize: Number(newData.eventPrize),
      rules,
      coordinators,
      studentCoordinators,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:8000/api/add-events", eventData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(eventData);
    } catch (error) {
      console.error(
        "Error adding event:",
        error.response?.data || error.message
      );
      alert("Failed to add event.");
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-16 pb-12 mt-10 font-sans">
      <h1 className="text-sky-500 text-3xl text-center mb-6">
        Add Technical Event
      </h1>
      <form onSubmit={addEvent} className="space-y-6">
        {/* Event Details */}
        <fieldset className="border border-sky-400 rounded-lg p-4">
          <legend className="text-lg font-semibold text-sky-600 px-2">
            Event Details
          </legend>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block font-medium">Department</label>
              <select
                name="departmentName"
                value={newData.departmentName}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="Mech">Mech</option>
                <option value="Civil">Civil</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Event Name</label>
              <input
                type="text"
                name="eventName"
                value={newData.eventName}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Event Type</label>
              <select
                name="type"
                value={newData.type}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              >
                <option value="technical">Technical</option>
                <option value="non-technical">Non-Technical</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Image URL</label>
              <input
                type="text"
                name="url"
                value={newData.url}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Description</label>
              <input
                type="text"
                name="eventDescription"
                value={newData.eventDescription}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Event Location</label>
              <input
                type="text"
                name="eventVenue"
                value={newData.eventVenue}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={newData.date}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Time</label>
              <input
                type="time"
                name="eventTime"
                value={newData.eventTime}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Price (₹)</label>
              <input
                type="number"
                name="eventPrize"
                value={newData.eventPrize}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>
          </div>
        </fieldset>

        {/* Event Rules */}
        <fieldset className="border border-sky-400 rounded-lg p-4">
          <legend className="text-lg font-semibold text-sky-600 px-2">
            Event Rules
          </legend>
          <div className="flex flex-col gap-2 mt-2">
            <input
              type="text"
              value={newRule}
              onChange={(e) => setNewRule(e.target.value)}
              placeholder="Enter rule"
              className="border border-sky-500 p-2 rounded text-sm"
            />
            <button
              type="button"
              onClick={addRule}
              className="bg-sky-500 text-white p-2 rounded w-fit"
            >
              Add Rule
            </button>
            <ul className="list-disc ml-6">
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </fieldset>

        {/* Coordinators */}
        <fieldset className="border border-sky-400 rounded-lg p-4">
          <legend className="text-lg font-semibold text-sky-600 px-2">
            Coordinators
          </legend>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newCoordinator.name}
              onChange={handleCoordinatorChange}
              placeholder="Coordinator Name"
              className="w-full border border-sky-500 p-2 rounded text-sm"
            />
            <input
              type="text"
              name="number"
              value={newCoordinator.number}
              onChange={handleCoordinatorChange}
              placeholder="Coordinator Number"
              className="w-full border border-sky-500 p-2 rounded text-sm"
            />
          </div>
          <button
            type="button"
            onClick={addCoordinator}
            className="bg-sky-500 text-white mt-2 p-2 rounded w-fit"
          >
            Add Coordinator
          </button>
        </fieldset>

        {/* Student Coordinators */}
        <fieldset className="border border-sky-400 rounded-lg p-4">
          <legend className="text-lg font-semibold text-sky-600 px-2">
            Student Coordinators
          </legend>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newStudentCoordinator.name}
              onChange={handleStudentCoordinatorChange}
              placeholder="Student Coordinator Name"
              className="w-full border border-sky-500 p-2 rounded text-sm"
            />
            <input
              type="text"
              name="number"
              value={newStudentCoordinator.number}
              onChange={handleStudentCoordinatorChange}
              placeholder="Student Coordinator Number"
              className="w-full border border-sky-500 p-2 rounded text-sm"
            />
          </div>
          <button
            type="button"
            onClick={addStudentCoordinator}
            className="bg-sky-500 text-white mt-2 p-2 rounded w-fit"
          >
            Add Student Coordinator
          </button>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded text-lg mt-4 w-full md:w-1/3 mx-auto block"
        >
          Add Event
        </button>
      </form>
    </div>
  );
}

export default TechnicalEvent;
