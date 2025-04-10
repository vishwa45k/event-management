import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DepartmentEvents() {
  const { name } = useParams();
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchEvents();
  }, [name]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/events?department=${name}`
      );
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleEditClick = (event) => {
    setEditingEvent(event);
    setFormData({ ...event });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/events/${formData._id}`,
        formData
      );
      setEditingEvent(null);
      fetchEvents();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8000/api/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 m-5 font-worksans text-lg">
      <h1 className="text-2xl font-bold text-center">Events for {name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {events.map((event, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold">{event.eventName}</h2>
            <p>{event.description}</p>
            <p>
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Location:</strong> {event.eventLocation}
            </p>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => handleEditClick(event)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={(e) => handleDelete(e, event._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Edit Event</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                name="eventName"
                value={formData.eventName || ""}
                onChange={handleChange}
                placeholder="Event Name"
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="eventLocation"
                value={formData.eventLocation || ""}
                onChange={handleChange}
                placeholder="Location"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="date"
                type="date"
                value={formData.date ? formData.date.slice(0, 10) : ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="time"
                type="time"
                value={formData.time || ""}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="price"
                type="number"
                value={formData.price || ""}
                onChange={handleChange}
                placeholder="Price"
                className="w-full border px-3 py-2 rounded"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DepartmentEvents;
