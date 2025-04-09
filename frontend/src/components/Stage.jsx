import React, { useState } from "react";
import axios from "axios";
function Stage() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    eventLocation: "",
    coordinatorName: "",
    coordinatorNumber: "",
    time: "",
    description: "",
    eventType: "", // New state for event type
  });

  const [coordinators, setCoordinators] = useState([]);
  const [studentCoordinators, setStudentCoordinators] = useState([]);
  const [newCoordinator, setNewCoordinator] = useState({
    Name: "",
    Number: "",
  });

  const [newStudentCoordinator, setNewStudentCoordinator] = useState({
    Name: "",
    Number: "",
  });

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
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

  const handleEventTypeChange = (e) => {
    setNewEvent({ ...newEvent, eventType: e.target.value });
  };

  const addCoordinator = (e) => {
    e.preventDefault();
    if (!newCoordinator.Name || !newCoordinator.Number) {
      alert("Please fill in both the Coordinator Name and Coordinator Number.");
      return;
    }
    setCoordinators([...coordinators, newCoordinator]);
    setNewCoordinator({ Name: "", Number: "" });
  };

  const addStudentCoordinator = (e) => {
    e.preventDefault();
    if (!newStudentCoordinator.Name || !newStudentCoordinator.Number) {
      alert(
        "Please fill in both the Student Coordinator Name and Student Coordinator Number."
      );
      return;
    }
    setStudentCoordinators([...studentCoordinators, newStudentCoordinator]);
    setNewStudentCoordinator({ Name: "", Number: "" });
  };

  const addEvent =async (e) => {
    e.preventDefault();
    const eventdata = {
      eventName: newEvent.eventName,
      eventType: newEvent.eventType,

      eventLocation: newEvent.eventLocation,
      coordinators: coordinators,
      studentCoordinators:studentCoordinators,
      time: newEvent.time,
      description: newEvent.description,
      
    };
    console.log(eventdata);
    if (
      !newEvent.eventName ||
      !newEvent.eventLocation ||
      !newEvent.time ||
      !newEvent.description ||
      !newEvent.eventType
    ) {
      alert("Please fill in all fields.");
      return;
    }
    try{
      const response=await axios.post(
        "http://localhost:8000/stage"
      ,eventdata,{
          headers: { "Content-Type": "application/json" },
        });
      
        setEvents([...events, response.data]);
        alert("Event added");
    }
 catch(error)
 {
  console.error(
    "error adding event:",
    error.response ? error.response.data : error.message
  );
 }
 alert("failed to add event");
    // Reset the form after adding the event
    setNewEvent({
      eventName: "",
      eventLocation: "",
      coordinatorName: "",
      coordinatorNumber: "",
      studentCoordinatorName:"",
      studentCoordinatorNumber:"",
      time: "",
      description: "",
      eventType: "", // Reset event type
    });
    setCoordinators([]); // Reset coordinators
    setStudentCoordinators([]); // Reset student coordinators
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (events.length === 0) {
      alert("No events to submit.");
      return;
    }
    // You can add your form submission logic here (e.g., sending data to an API)
    alert("Form submitted with all events");
    console.log(events); // Just for demonstration, you can send this to your backend

    // Clear events after submit (optional)
    setEvents([]);
  };

  return (
    <div className="container mx-auto px-4 lg:px-16 pb-12 lg:mt-18 mt-10 font-worksans text-lg">
      <h1 className="text-sky-500 text-3xl flex justify-center">Event Form</h1>
      <form onSubmit={addEvent}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
          {/* Event Name */}
          <div>
            <label className="block font-medium py-3">Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={newEvent.eventName}
              onChange={handleInputChange}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>

          {/* Event Location */}
          <div>
            <label className="block font-medium py-3">Event Location:</label>
            <input
              type="text"
              name="eventLocation"
              value={newEvent.eventLocation}
              onChange={handleInputChange}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>

          {/* Event Time */}
          <div>
            <label className="block font-medium py-3">Event Time:</label>
            <input
              type="time"
              name="time"
              value={newEvent.time}
              onChange={handleInputChange}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>

          {/* Event Description */}
          <div>
            <label className="block font-medium py-3">Event Description:</label>
            <input
              type="text"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>

          {/* Event Type (Radio Button for Onstage/Offstage) */}
          <div>
            <label className="block font-medium py-3">Event Type:</label>
            <div className="flex space-x-4">
              <div>
                <input
                  type="radio"
                  id="onstage"
                  name="eventType"
                  value="Onstage"
                  checked={newEvent.eventType === "Onstage"}
                  onChange={handleEventTypeChange}
                  className="mr-2"
                />
                <label htmlFor="onstage">Onstage</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="offstage"
                  name="eventType"
                  value="Offstage"
                  checked={newEvent.eventType === "Offstage"}
                  onChange={handleEventTypeChange}
                  className="mr-2"
                />
                <label htmlFor="offstage">Offstage</label>
              </div>
            </div>
          </div>

          {/* Coordinator Information */}
          <div>
            <label className="text-xl font-medium block mb-2">
              Coordinator Information
            </label>
            <div className="flex space-x-2 mb-3">
              <input
                type="text"
                name="Name"
                value={newCoordinator.Name}
                onChange={handleCoordinatorChange}
                placeholder="Coordinator Name"
                className="w-full md:w-1/2 border border-sky-500 p-1.5 rounded-lg"
              />
              <input
                type="text"
                name="Number"
                value={newCoordinator.Number}
                onChange={handleCoordinatorChange}
                placeholder="Coordinator Number"
                className="w-full md:w-1/2 border border-sky-500 p-1.5 rounded-lg"
              />
              <button
                type="button"
                className="bg-sky-500  text-white rounded"
                onClick={addCoordinator}
              >
                Add Coordinator
              </button>
            </div>
            <div>
              {/* Display Coordinators */}
              {coordinators.length > 0 && (
                <ul>
                  {coordinators.map((coordinator, index) => (
                    <li key={index}>
                      {coordinator.Name} - {coordinator.Number}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Student Coordinator Information */}
          <div>
            <label className="text-xl font-medium block mb-2">
              Student Coordinator Information
            </label>
            <div className="flex space-x-2 mb-3">
              <input
                type="text"
                name="Name"
                value={newStudentCoordinator.Name}
                onChange={handleStudentCoordinatorChange}
                placeholder="Student Coordinator Name"
                className="w-full md:w-1/2 border border-sky-500 p-1.5 rounded-lg"
              />
              <input
                type="text"
                name="Number"
                value={newStudentCoordinator.Number}
                onChange={handleStudentCoordinatorChange}
                placeholder="Student Coordinator Number"
                className="w-full md:w-1/2 border border-sky-500 p-1.5 rounded-lg"
              />
              <button
                type="button"
                className="bg-sky-500  text-white rounded"
                onClick={addStudentCoordinator}
              >
                Add Student Coordinator
              </button>
            </div>
            <div>
              {/* Display Student Coordinators */}
              {studentCoordinators.length > 0 && (
                <ul>
                  {studentCoordinators.map((studentCoordinator, index) => (
                    <li key={index}>
                      {studentCoordinator.Name} - {studentCoordinator.Number}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Add Event Button */}
        {/* <div className="flex justify-center mb-5">
          <button
            type="button"
            className="bg-sky-500 px-3 py-2 text-white rounded block animate-bounce"
            
          >
            Add Event
          </button>
        </div> */}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 px-3 py-2 text-white rounded block"
          >
            Submit All Events
          </button>
        </div>
      </form>

      {/* Display All Events */}
      <div className="mt-10">
        {events.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold">All Events</h2>
            <ul>
              {events.map((event, index) => (
                <li key={index} className="mb-3">
                  <h3 className="font-medium">{event.eventName}</h3>
                  <p>Location: {event.eventLocation}</p>
                  <p>Time: {event.time}</p>
                  <p>Description: {event.description}</p>
                  <p>Event Type: {event.eventType}</p>{" "}
                  {/* Display Event Type */}
                  <p>Coordinators:</p>
                  <ul>
                    {event.coordinators.map((coordinator, idx) => (
                      <li key={idx}>
                        {coordinator.Name} - {coordinator.Number}
                      </li>
                    ))}
                  </ul>
                  <p>Student Coordinators:</p>
                  <ul>
                    {event.studentCoordinators.map(
                      (studentCoordinator, idx) => (
                        <li key={idx}>
                          {studentCoordinator.Name} -{" "}
                          {studentCoordinator.Number}
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stage ;
