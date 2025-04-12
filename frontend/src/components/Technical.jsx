import React, { useState, useEffect } from "react";
import axios from "axios";

function TechnicalEvent() {
  const [rules, setRules] = useState([]);
  const [DepartmentList, setDepartmentList] = useState([]);
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
    numTechnicalEvents: "",
    numNonTechnicalEvents: "",
    numWorkshops: "",
    url: "",
    description: "",
    eventLocation: "",
    date: new Date().toISOString().split("T")[0],
    time: "",
    price: "",
    rules: [],
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/events", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDepartmentList(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleData = (e) => {
    setData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleCoordinatorChange = (e) => {
    setNewCoordinator({ ...newCoordinator, [e.target.name]: e.target.value });
  };

  const handleStudentCoordinatorChange = (e) => {
    setNewStudentCoordinator({
      ...newStudentCoordinator,
      [e.target.name]: e.target.value,
    });
  };

  const addCoordinator = () => {
    if (!newCoordinator.name || !newCoordinator.number)
      return alert("Enter both name and number");
    setCoordinators([...coordinators, newCoordinator]);
    setNewCoordinator({ name: "", number: "" });
  };

  const addStudentCoordinator = () => {
    if (!newStudentCoordinator.name || !newStudentCoordinator.number)
      return alert("Enter both name and number");
    setStudentCoordinators([...studentCoordinators, newStudentCoordinator]);
    setNewStudentCoordinator({ name: "", number: "" });
  };

  const addRule = () => {
    if (!newRule) return alert("Enter a rule");
    setRules([...rules, newRule]);
    setNewRule("");
  };

  const addDepartment = async (e) => {
    e.preventDefault();
    const departmentData = {
      ...newData,
      numTechnicalEvents: Number(newData.numTechnicalEvents),
      numNonTechnicalEvents: Number(newData.numNonTechnicalEvents),
      numWorkshops: Number(newData.numWorkshops),
      price: Number(newData.price),
      rules,
      coordinators,
      studentCoordinators,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/add-events",
        departmentData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(departmentData);
      alert("Event added successfully!");
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

      <form onSubmit={addDepartment} className="space-y-6">
        {/* Event Basics */}
        <fieldset className="border border-sky-300 rounded-lg p-4">
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
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
                <option value="Chemical">Chemical</option>
                <option value="Biotech">Biotech</option>
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
                name="description"
                value={newData.description}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Event Location</label>
              <input
                type="text"
                name="eventLocation"
                value={newData.eventLocation}
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
                name="time"
                value={newData.time}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={newData.price}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>
          </div>
        </fieldset>

        {/* Event Counts */}
        <fieldset className="border border-sky-300 rounded-lg p-4">
          <legend className="text-lg font-semibold text-sky-600 px-2">
            Event Counts
          </legend>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block font-medium">Technical Events</label>
              <input
                type="number"
                name="numTechnicalEvents"
                value={newData.numTechnicalEvents}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Non-Technical Events</label>
              <input
                type="number"
                name="numNonTechnicalEvents"
                value={newData.numNonTechnicalEvents}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>

            <div>
              <label className="block font-medium">Workshops</label>
              <input
                type="number"
                name="numWorkshops"
                value={newData.numWorkshops}
                onChange={handleData}
                className="w-full border border-sky-500 rounded p-2 text-sm"
              />
            </div>
          </div>
        </fieldset>

        {/* Rules */}
        <fieldset className="border border-sky-300 rounded-lg p-4">
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
        <fieldset className="border border-sky-300 rounded-lg p-4">
          <legend className="text-lg font-semibold text-sky-600 px-2">
            Coordinators
          </legend>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={newCoordinator.name}
                onChange={handleCoordinatorChange}
                placeholder="Coordinator Name"
                className="w-full border border-sky-500 p-2 rounded text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                name="number"
                value={newCoordinator.number}
                onChange={handleCoordinatorChange}
                placeholder="Coordinator Number"
                className="w-full border border-sky-500 p-2 rounded text-sm"
              />
            </div>
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
        <fieldset className="border border-sky-300 rounded-lg p-4">
          <legend className="text-lg font-semibold text-sky-600 px-2">
            Student Coordinators
          </legend>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={newStudentCoordinator.name}
                onChange={handleStudentCoordinatorChange}
                placeholder="Student Coordinator Name"
                className="w-full border border-sky-500 p-2 rounded text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                name="number"
                value={newStudentCoordinator.number}
                onChange={handleStudentCoordinatorChange}
                placeholder="Student Coordinator Number"
                className="w-full border border-sky-500 p-2 rounded text-sm"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={addStudentCoordinator}
            className="bg-sky-500 text-white mt-2 p-2 rounded w-fit"
          >
            Add Student Coordinator
          </button>
        </fieldset>

        {/* Submit */}
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
