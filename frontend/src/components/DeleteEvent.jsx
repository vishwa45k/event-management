import React, { useState } from "react";

const DeleteEvent = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [eventName, setEventName] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!departmentName || !eventName) {
      setMessage("Both department name and event name are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/event", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ departmentName, eventName }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Event deleted successfully.");
      } else {
        setMessage(data.error || "Failed to delete event.");
      }
    } catch (error) {
      setMessage("Error deleting event. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-worksans text-lg">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Delete Event
        </h2>
        <input
          type="text"
          placeholder="Department Name"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-3"
        />
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-3"
        />
        <button
          onClick={handleDelete}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
        >
          Delete Event
        </button>
        {message && <p className="mt-3 text-center text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default DeleteEvent;
