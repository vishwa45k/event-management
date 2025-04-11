import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import "../../assets/fonts/dmsans.css";
import "../../assets/fonts/dmserif.css";

function CoordinatorCard({ deptDetails, role }) {
  console.log(deptDetails);
  return (
    <div className="p-3 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        className="w-full max-w-md sm:max-w-lg rounded-lg overflow-hidden shadow-lg bg-white p-5 sm:p-6"
      >
        <div className="text-center">
          <h5 className="font-bold text-lg powergrok sm:text-xl mb-2 text-gray-900 dm-serif">
            {role}
          </h5>
          <p className="text-gray-700 text-md dm-sans sm:text-base">
            {deptDetails.name}
            
          </p>
          {deptDetails.contact}
        </div>

        {/* Buttons Section */}
     { deptDetails.contact &&  <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5 sm:mt-6">
          <Button className="dm-sans w-full sm:w-auto rounded-full px-5 sm:px-6 bg-sky-400 hover:bg-white hover:outline-sky-400 hover:outline-2 hover:border-2 hover:border-sky-400 hover:text-sky-400">
            <a
              href={`tel:${deptDetails.contact}`}
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </Button>
          {/* {deptDetails.coordinatorEmail && (
            <Button className="dm-sans w-full sm:w-auto rounded-full px-5 sm:px-6 bg-sky-400 hover:bg-white hover:outline-sky-400 hover:outline-2 hover:border-2 hover:border-sky-400 hover:text-sky-400">
              <a
                href={`mailto:${deptDetails.coordinatorEmail}`}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </Button>
          )} */}
        </div>}
      </motion.div>
    </div>
  );
}

export default CoordinatorCard;
