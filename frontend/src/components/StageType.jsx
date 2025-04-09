import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Missing import

function StageType() {
  const { type } = useParams(); // Corrected variable name
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const url = `http://localhost:8000/stage/type?eventType=${type}`;
      try {
        const response = await axios.get(url);
        console.log(url);
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, [type]); // Use `type` instead of `eventType`

  return (
    <div className="container mx-auto p-6 m-5 font-worksans text-lg">
      <h1 className="text-2xl font-bold text-center">Events for {type}</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {event.map((eventItem, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{eventItem.eventName}</h2>
            <p>{eventItem.description}</p>
            <p>
              <strong>Date:</strong> {eventItem.date}
            </p>
            <p>
              <strong>Location:</strong> {eventItem.eventLocation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StageType;
