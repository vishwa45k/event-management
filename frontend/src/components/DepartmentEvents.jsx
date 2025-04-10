import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DepartmentEvents() {
  const { name } = useParams();
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({});
  const [ruleInput, setRuleInput] = useState("");

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

  const handleRuleKeyDown = (e) => {
    if (e.key === "Enter" && ruleInput.trim() !== "") {
      e.preventDefault();
      const updatedRules = [...(formData.rules || []), ruleInput.trim()];
      setFormData((prev) => ({ ...prev, rules: updatedRules }));
      setRuleInput("");
    }
  };

  const removeRule = (index) => {
    const updatedRules = [...formData.rules];
    updatedRules.splice(index, 1);
    setFormData((prev) => ({ ...prev, rules: updatedRules }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/events/${formData._id}`,
        formData
      );
      console.log(formData._id);
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
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-semibold mb-4">Edit Event</h2>
            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="col-span-2">
                <label className="block mb-1 font-medium">Event Name</label>
                <input
                  name="eventName"
                  value={formData.eventName || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  rows={3}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Location</label>
                <input
                  name="eventLocation"
                  value={formData.eventLocation || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Date</label>
                <input
                  name="date"
                  type="date"
                  value={formData.date ? formData.date.slice(0, 10) : ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Time</label>
                <input
                  name="time"
                  type="time"
                  value={formData.time || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Price</label>
                <input
                  name="price"
                  type="number"
                  value={formData.price || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Type</label>
                <select
                  name="type"
                  value={formData.type || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="technical">Technical</option>
                  <option value="nontechnical">Nontechnical</option>
                  <option value="workshop">Workshop</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Technical Count
                </label>
                <input
                  name="technicalCount"
                  type="number"
                  value={formData.technicalCount || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Nontechnical Count
                </label>
                <input
                  name="NontechnicalCount"
                  type="number"
                  value={formData.NontechnicalCount || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Workshop Count</label>
                <input
                  name="workshopCount"
                  type="number"
                  value={formData.workshopCount || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-1 font-medium">Image URL</label>
                <input
                  name="url"
                  value={formData.url || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-1 font-medium">Rules</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(formData.rules || []).map((rule, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      {rule}
                      <button
                        type="button"
                        onClick={() => removeRule(idx)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  value={ruleInput}
                  onChange={(e) => setRuleInput(e.target.value)}
                  onKeyDown={handleRuleKeyDown}
                  placeholder="Type a rule and press Enter"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="col-span-2 flex justify-end gap-2 mt-4">
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
