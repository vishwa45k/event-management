import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function TechnicalEvent() {
  const [newData, setData] = useState({
    departmentName: "",
    eventName: "",
    type: "technical",
    url: "",
    eventDescription: "",
    eventVenue: "",
    eventTime: "",
    date: "",
  });

  const [rules, setRules] = useState([]);
  const [eventRounds, setEventRounds] = useState([]);
  const [eventPrize, setEventPrize] = useState([]);

  const [staffCoordinator, setStaffCoordinator] = useState({
    name: "",
    number: "",
  });
  const [studentCoordinators, setStudentCoordinators] = useState([]);
  const [newStudentCoordinator, setNewStudentCoordinator] = useState({
    name: "",
    number: "",
  });

  const [newRule, setNewRule] = useState("");
  const [newRound, setNewRound] = useState("");
  const [newPrize, setNewPrize] = useState("");

  const handleData = (e) =>
    setData({ ...newData, [e.target.name]: e.target.value });

  const handleStaffCoordinator = (e) =>
    setStaffCoordinator({
      ...staffCoordinator,
      [e.target.name]: e.target.value,
    });

  const handleStudentCoordinatorChange = (e) =>
    setNewStudentCoordinator({
      ...newStudentCoordinator,
      [e.target.name]: e.target.value,
    });

  const addStudentCoordinator = () => {
    if (!newStudentCoordinator.name || !newStudentCoordinator.number) return;
    setStudentCoordinators([...studentCoordinators, newStudentCoordinator]);
    setNewStudentCoordinator({ name: "", number: "" });
  };

  const addItem = (type) => {
    if (type === "rule" && newRule) {
      setRules([...rules, newRule]);
      setNewRule("");
    } else if (type === "round" && newRound) {
      setEventRounds([...eventRounds, newRound]);
      setNewRound("");
    } else if (type === "prize" && newPrize) {
      setEventPrize([...eventPrize, newPrize]);
      setNewPrize("");
    }
  };

  const removeItem = (arraySetter, array, index) => {
    const updated = [...array];
    updated.splice(index, 1);
    arraySetter(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!staffCoordinator.name || !staffCoordinator.number) {
      Swal.fire(
        "Error!",
        "Please fill in the Staff Coordinator's details",
        "error"
      );
      return;
    }

    const eventData = {
      ...newData,
      eventPrize,
      eventRules: rules,
      eventRounds,
      eventStaffCoordinator: staffCoordinator,
      studentCoordinator: studentCoordinators,
    };

    const result = await Swal.fire({
      title: "Confirm Submission",
      text: "Do you want to add this event?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        await axios.post("http://localhost:8000/api/add-events", eventData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(eventData);

        Swal.fire("Success!", "Event added successfully", "success");

        setData({
          departmentName: "",
          eventName: "",
          type: "technical",
          url: "",
          eventDescription: "",
          eventVenue: "",
          eventTime: "",
          date: "",
        });
        setRules([]);
        setEventRounds([]);
        setEventPrize([]);
        setStaffCoordinator({ name: "", number: "" });
        setStudentCoordinators([]);
      } catch (error) {
        Swal.fire("Error!", "Failed to add event", "error");
      }
    }
  };

  const Chip = ({ text, onRemove }) => (
    <div className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
      {text}
      <button
        onClick={onRemove}
        className="text-red-500 font-bold hover:text-red-700"
      >
        &times;
      </button>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-sky-600 mb-6">
        Add Technical Event
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Info */}
        <fieldset className="border border-sky-300 p-4 rounded-lg">
          <legend className="text-lg text-sky-700 font-semibold px-2">
            Event Information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <select
              name="departmentName"
              value={newData.departmentName}
              onChange={handleData}
              className="input"
            >
              <option value="" disabled>
                Select Department
              </option>
              <option value="Artificial Intelligence and Data Science">
                Artificial Intelligence and Data Science
              </option>
              <option value="Computer Science and Engineering">
                Computer Science and Engineering
              </option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Electronics and Communication Engineering">
                Electronics and Communication Engineering
              </option>
              <option value="Electrical and Electronics Engineering">
                Electrical and Electronics Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
            </select>
            <input
              name="eventName"
              placeholder="Event Name"
              value={newData.eventName}
              onChange={handleData}
              className="input"
            />
            <select
              name="type"
              value={newData.type}
              onChange={handleData}
              className="input"
            >
              <option value="technical">Technical</option>
              <option value="non-technical">Non-Technical</option>
              <option value="workshop">Workshop</option>
            </select>
            <input
              name="url"
              placeholder="Poster URL"
              value={newData.url}
              onChange={handleData}
              className="input"
            />
            <input
              name="eventDescription"
              placeholder="Description"
              value={newData.eventDescription}
              onChange={handleData}
              className="input"
            />
            <input
              name="eventVenue"
              placeholder="Venue"
              value={newData.eventVenue}
              onChange={handleData}
              className="input"
            />
            <input
              name="date"
              type="date"
              value={newData.date}
              onChange={handleData}
              className="input"
            />
            <input
              name="eventTime"
              type="time"
              value={newData.eventTime}
              onChange={handleData}
              className="input"
            />
          </div>
        </fieldset>

        {/* Prize */}
        <fieldset className="border border-sky-300 p-4 rounded-lg">
          <legend className="text-lg text-sky-700 font-semibold px-2">
            Prizes (₹)
          </legend>
          <div className="flex flex-wrap gap-2 mb-2">
            {eventPrize.map((p, i) => (
              <Chip
                key={i}
                text={p}
                onRemove={() => removeItem(setEventPrize, eventPrize, i)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newPrize}
              onChange={(e) => setNewPrize(e.target.value)}
              className="input"
              placeholder="Enter prize"
            />
            <button
              type="button"
              onClick={() => addItem("prize")}
              className="btn"
            >
              Add
            </button>
          </div>
        </fieldset>

        {/* Rounds */}
        <fieldset className="border border-sky-300 p-4 rounded-lg">
          <legend className="text-lg text-sky-700 font-semibold px-2">
            Event Rounds
          </legend>
          <div className="flex flex-wrap gap-2 mb-2">
            {eventRounds.map((round, i) => (
              <Chip
                key={i}
                text={round}
                onRemove={() => removeItem(setEventRounds, eventRounds, i)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newRound}
              onChange={(e) => setNewRound(e.target.value)}
              className="input"
              placeholder="Enter round"
            />
            <button
              type="button"
              onClick={() => addItem("round")}
              className="btn"
            >
              Add
            </button>
          </div>
        </fieldset>

        {/* Rules */}
        <fieldset className="border border-sky-300 p-4 rounded-lg">
          <legend className="text-lg text-sky-700 font-semibold px-2">
            Rules
          </legend>
          <div className="flex flex-wrap gap-2 mb-2">
            {rules.map((rule, i) => (
              <Chip
                key={i}
                text={rule}
                onRemove={() => removeItem(setRules, rules, i)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newRule}
              onChange={(e) => setNewRule(e.target.value)}
              className="input"
              placeholder="Enter rule"
            />
            <button
              type="button"
              onClick={() => addItem("rule")}
              className="btn"
            >
              Add
            </button>
          </div>
        </fieldset>

        {/* Staff Coordinator */}
        <fieldset className="border border-sky-300 p-4 rounded-lg">
          <legend className="text-lg text-sky-700 font-semibold px-2">
            Staff Coordinator
          </legend>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={staffCoordinator.name}
              onChange={handleStaffCoordinator}
              className="input"
            />
            <input
              type="text"
              name="number"
              placeholder="Contact Number"
              value={staffCoordinator.number}
              onChange={handleStaffCoordinator}
              className="input"
            />
          </div>
        </fieldset>

        {/* Student Coordinators */}
        <fieldset className="border border-sky-300 p-4 rounded-lg">
          <legend className="text-lg text-sky-700 font-semibold px-2">
            Student Coordinators
          </legend>
          <div className="flex flex-wrap gap-2 mb-2">
            {studentCoordinators.map((c, i) => (
              <Chip
                key={i}
                text={`${c.name} (${c.number})`}
                onRemove={() =>
                  removeItem(setStudentCoordinators, studentCoordinators, i)
                }
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newStudentCoordinator.name}
              onChange={handleStudentCoordinatorChange}
              className="input"
            />
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={newStudentCoordinator.number}
              onChange={handleStudentCoordinatorChange}
              className="input"
            />
          </div>
          <button
            type="button"
            onClick={addStudentCoordinator}
            className="btn mt-2"
          >
            Add Student Coordinator
          </button>
        </fieldset>

        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg w-full md:w-1/3 mx-auto block"
        >
          Submit Event
        </button>
      </form>

      <style jsx>{`
        .input {
          @apply border border-sky-400 rounded p-2 w-full text-sm;
        }
        .btn {
          @apply bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600;
        }
      `}</style>
    </div>
  );
}

export default TechnicalEvent;
