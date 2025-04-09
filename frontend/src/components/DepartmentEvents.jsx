import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DepartmentEvents() {
  const { name } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
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
    fetchEvents();
  }, [name]);

  return (
    <div className="container mx-auto p-6 m-5 font-worksans text-lg">
      <h1 className="text-2xl font-bold text-center">Events for {name}</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {events.map((event, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{event.eventName}</h2>
            <p>{event.description}</p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Location:</strong> {event.eventLocation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentEvents;
