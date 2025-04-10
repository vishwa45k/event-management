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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

  const addCoordinator = (e) => {
    e.preventDefault();
    if (!newCoordinator.name || !newCoordinator.number) {
      alert("Please enter both Coordinator Name and Number.");
      return;
    }
    setCoordinators([...coordinators, newCoordinator]);
    setNewCoordinator({ name: "", number: "" });
    alert("Coordinator added successfully!");
  };

  const handleStudentCoordinatorChange = (e) => {
    setNewStudentCoordinator({
      ...newStudentCoordinator,
      [e.target.name]: e.target.value,
    });
  };

  const addStudentCoordinator = (e) => {
    e.preventDefault();
    if (!newStudentCoordinator.name || !newStudentCoordinator.number) {
      alert("Please enter both Student Coordinator Name and Number.");
      return;
    }
    setStudentCoordinators([...studentCoordinators, newStudentCoordinator]);
    setNewStudentCoordinator({ name: "", number: "" });
    alert("Student Coordinator added successfully!");
  };

  const addRule = (e) => {
    e.preventDefault();
    if (!newRule) {
      alert("Please enter a rule before adding.");
      return;
    }
    setRules([...rules, newRule]);
    setNewRule("");
    alert("Rule added successfully!");
  };

  const addDepartment = async (e) => {
    e.preventDefault();
    const departmentData = {
      departmentName: newData.departmentName,
      eventName: newData.eventName,
      url: newData.url,
      description: newData.description,
      numTechnicalEvents: Number(newData.numTechnicalEvents),
      numNonTechnicalEvents: Number(newData.numNonTechnicalEvents),
      numWorkshops: Number(newData.numWorkshops),
      type: newData.type,
      eventLocation: newData.eventLocation,
      date: newData.date,
      time: newData.time,
      price: Number(newData.price),
      rules: rules,
      coordinators: coordinators,
      studentCoordinators: studentCoordinators,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/events",
        departmentData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDepartmentList([...DepartmentList, response.data]);
      console.log(departmentData);
    } catch (error) {
      console.error(
        "Error adding event:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to add event.");
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-16 pb-12 lg:mt-18 mt-10 font-sans">
      <h1 className="text-sky-500 text-3xl flex justify-center">
        Technical Event
      </h1>
      <form onSubmit={addDepartment}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
          <div>
            <label className="block fon t-medium py-3">Department Name:</label>
            <select
              name="departmentName"
              value={newData.departmentName}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            >
              <option value="" selected>
                Select Department
              </option>
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
            <label className="block font-medium py-3">
              Number of Technical Events:
            </label>
            <input
              type="number"
              name="numTechnicalEvents"
              value={newData.numTechnicalEvents}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">
              Number of Non-Technical Events:
            </label>
            <input
              type="number"
              name="numNonTechnicalEvents"
              value={newData.numNonTechnicalEvents}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">
              Number of Workshops:
            </label>
            <input
              type="number"
              name="numWorkshops"
              value={newData.numWorkshops}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>

          <div>
            <label className="block font-medium py-3">Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={newData.eventName}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Image URL:</label>
            <input
              type="text"
              name="url"
              value={newData.url}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Description:</label>
            <input
              type="text"
              name="description"
              value={newData.description}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Date:</label>
            <input
              type="date"
              name="date"
              value={newData.date}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Event Location:</label>
            <input
              type="text"
              name="eventLocation"
              value={newData.eventLocation}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Time:</label>
            <input
              type="time"
              name="time"
              value={newData.time}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Price Amount:</label>
            <input
              type="number"
              name="price"
              value={newData.price}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Event Type:</label>
            <select
              name="type"
              value={newData.type}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5"
            >
              <option value="technical">Technical</option>
              <option value="non-technical">Non-Technical</option>
              <option value="workshop">Workshop</option>
            </select>
          </div>
          <div>
            <h2 className="text-lg font-medium py-3">Event Rules</h2>
            <input
              type="text"
              value={newRule}
              onChange={(e) => setNewRule(e.target.value)}
              placeholder="Enter Event Rule"
              className="w-full md:w-3/4 border border-sky-500 p-1.5 rounded-lg mb-2"
            />
            <button
              type="button"
              className="bg-sky-500 text-white rounded p-2 block w-full md:w-1/4"
              onClick={addRule}
            >
              Add Rule
            </button>
          </div>
        </div>

        {/* Coordinator Section */}
        <h2 className="text-lg font-medium py-3 me-3">Coordinators</h2>
        <input
          type="text"
          name="name"
          value={newCoordinator.name}
          onChange={handleCoordinatorChange}
          placeholder="Coordinator Name"
          className="w-full md:w-3/4 border border-sky-500 p-1.5 rounded-lg mb-2"
        />
        <input
          type="text"
          name="number"
          value={newCoordinator.number}
          onChange={handleCoordinatorChange}
          placeholder="Coordinator Number"
          className="w-full md:w-3/4 border border-sky-500 p-1.5 rounded-lg mb-2"
        />
        <button
          type="button"
          onClick={addCoordinator}
          className="bg-sky-500 text-white rounded p-2 block w-full md:w-1/4"
        >
          Add Coordinator
        </button>

        {/* Student Coordinator Section */}
        <h2 className="text-lg font-medium py-3 me-3">Student Coordinators</h2>
        <input
          type="text"
          name="name"
          value={newStudentCoordinator.name}
          onChange={handleStudentCoordinatorChange}
          placeholder="Student Coordinator Name"
          className="w-full md:w-3/4 border border-sky-500 p-1.5 rounded-lg mb-2"
        />
        <input
          type="text"
          name="number"
          value={newStudentCoordinator.number}
          onChange={handleStudentCoordinatorChange}
          placeholder="Student Coordinator Number"
          className="w-full md:w-3/4 border border-sky-500 p-1.5 rounded-lg mb-2"
        />
        <button
          type="button"
          onClick={addStudentCoordinator}
          className="bg-sky-500 text-white rounded p-2 block w-full md:w-1/4"
        >
          Add Student Coordinator
        </button>

        {/* Submit Event */}
        <button className="bg-sky-500 text-white rounded p-3 block w-full md:w-1/4 mt-3">
          Add Event
        </button>
      </form>
    </div>
  );
}

export default TechnicalEvent;
