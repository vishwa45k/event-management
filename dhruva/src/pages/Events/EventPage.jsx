import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import EventShowOff from "./EventShowOff";
import TestCard from "@/components/page-components/TestCard";
import "../../assets/fonts/powergrotesk.css";

function EventPage() {
  const location = useLocation();
  const [department, setDepartment] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = location.state.events;
    console.log(data.events);
    setDepartment(data);
    setEvents(data.events);
  }, []);

  if (!department) {
    return (
      <div className="text-center text-red-500 text-2xl pt-20">
        Department not found!
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-30 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <motion.div
        className="my-10 container mx-auto px-4 sm:px-6 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl  tracking-wide powergrok bg-gradient-to-r text-black bg-clip-text">
          {department.departmentName}
        </h1>
      </motion.div>

      {events && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <EventShowOff events={events} />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <TestCard deptDetails={department} />
        </div>
      </motion.div>
    </div>
  );
}

export default EventPage;
