import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

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
      const token = localStorage.getItem("token") || null;
      console.log("Token:", token);

      const response = await axios.get(
        `http://localhost:8000/api/events/${name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.department.events);
      console.log(token);

      setEvents(response.data.department.events);
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
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:8000/api/events/${formData._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(`http://localhost:8000/api/events/${formData._id}`);
      console.log(formData);
      console.log(formData._id);

      setEditingEvent(null);
      fetchEvents();
      Swal.fire({
        icon: "success",
        title: "event updated",
        timer: 2000,
      });
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:8000/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchEvents();
      Swal.fire({
        icon: "success",
        title: "event removed",
        timer: 2000,
      });
    } catch (error) {
      console.error("Error deleting event:", error);
      Swal.fire({
        icon: "error",
        title: "error Occurred",
      });
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
              {/* <strong>Date:</strong> {event.} */}
              {/* {JSON.stringify(event)} */}
            </p>
            <p>
              <strong>Location:</strong> {event.eventVenue}
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
                <label className="block mb-1 font-medium">
                  Event Description
                </label>
                <textarea
                  name="eventDescription"
                  value={formData.eventDescription || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  rows={3}
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-1 font-medium">Poster URL</label>
                <input
                  name="posterUrl"
                  value={formData.posterUrl || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-1 font-medium">Thumbnail URL</label>
                <input
                  name="eventThumbnail"
                  value={formData.eventThumbnail || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Event Type</label>
                <input
                  name="eventType"
                  value={formData.eventType || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Event Sub-Type</label>
                <input
                  name="eventSubType"
                  value={formData.eventSubType || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Event Time</label>
                <input
                  name="eventTime"
                  type="time"
                  value={formData.eventTime || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Venue</label>
                <input
                  name="eventVenue"
                  value={formData.eventVenue || ""}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-1 font-medium">Rounds</label>
                {(formData.eventRounds || []).map((round, idx) => (
                  <div key={idx} className="flex items-center mb-1">
                    <input
                      className="w-full border px-3 py-1 rounded"
                      value={round}
                      onChange={(e) => {
                        const updated = [...formData.eventRounds];
                        updated[idx] = e.target.value;
                        setFormData({ ...formData, eventRounds: updated });
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = [...formData.eventRounds];
                        updated.splice(idx, 1);
                        setFormData({ ...formData, eventRounds: updated });
                      }}
                      className="ml-2 text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      eventRounds: [...(formData.eventRounds || []), ""],
                    })
                  }
                  className="mt-1 text-blue-600"
                >
                  + Add Round
                </button>
              </div>

              {/* Prizes Input */}
              <div className="col-span-2">
                <label className="block mb-1 font-medium">Prizes</label>
                {(formData.eventPrize || []).map((prize, idx) => (
                  <div key={idx} className="flex items-center mb-1">
                    <input
                      className="w-full border px-3 py-1 rounded"
                      value={prize}
                      onChange={(e) => {
                        const updated = [...formData.eventPrize];
                        updated[idx] = e.target.value;
                        setFormData({ ...formData, eventPrize: updated });
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = [...formData.eventPrize];
                        updated.splice(idx, 1);
                        setFormData({ ...formData, eventPrize: updated });
                      }}
                      className="ml-2 text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      eventPrize: [...(formData.eventPrize || []), ""],
                    })
                  }
                  className="mt-1 text-blue-600"
                >
                  + Add Prize
                </button>
              </div>

              {/* Rules Input (same as before) */}
              <div className="col-span-2">
                <label className="block mb-1 font-medium">Rules</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {(formData.eventRules || []).map((rule, idx) => (
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

              {/* Staff Coordinator */}
              <div className="col-span-2">
                <label className="block mb-1 font-medium">
                  Staff Coordinator
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    name="eventStaffCoordinator.name"
                    placeholder="Name"
                    value={formData.eventStaffCoordinator?.name || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        eventStaffCoordinator: {
                          ...formData.eventStaffCoordinator,
                          name: e.target.value,
                        },
                      })
                    }
                    className="border px-3 py-2 rounded"
                  />
                  <input
                    name="eventStaffCoordinator.contact"
                    placeholder="Contact"
                    value={formData.eventStaffCoordinator?.contact || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        eventStaffCoordinator: {
                          ...formData.eventStaffCoordinator,
                          contact: e.target.value,
                        },
                      })
                    }
                    className="border px-3 py-2 rounded"
                  />
                </div>
              </div>

              {/* Student Coordinators */}
              <div className="col-span-2">
                <label className="block mb-1 font-medium">
                  Student Coordinators
                </label>
                {(formData.studentCoordinator || []).map((coord, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-2 mb-2">
                    <input
                      placeholder="Name"
                      value={coord.name}
                      onChange={(e) => {
                        const updated = [...formData.studentCoordinator];
                        updated[idx].name = e.target.value;
                        setFormData({
                          ...formData,
                          studentCoordinator: updated,
                        });
                      }}
                      className="border px-3 py-2 rounded"
                    />
                    <input
                      placeholder="Contact"
                      value={coord.contact}
                      onChange={(e) => {
                        const updated = [...formData.studentCoordinator];
                        updated[idx].contact = e.target.value;
                        setFormData({
                          ...formData,
                          studentCoordinator: updated,
                        });
                      }}
                      className="border px-3 py-2 rounded"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      studentCoordinator: [
                        ...(formData.studentCoordinator || []),
                        { name: "", contact: "" },
                      ],
                    })
                  }
                  className="text-blue-600"
                >
                  + Add Student Coordinator
                </button>
              </div>

              {/* Save/Cancel Buttons */}
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
