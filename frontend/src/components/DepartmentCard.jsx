import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DepartmentCard() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://event-management-dhruva-production.up.railway.app/api/get-events",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setDepartments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 md:px-28">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 font-worksans">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-32 rounded-xl bg-slate-200 animate-pulse"
              />
            ))
          : departments.map((department, index) => (
              <div
                key={index}
                onClick={() =>
                  navigate(`/department/${department.departmentName}`)
                }
                className="flex items-center justify-center h-32 bg-sky-400 text-white font-semibold text-lg rounded-xl shadow-md hover:bg-sky-500 transition-all duration-200 cursor-pointer text-center"
              >
                {department.departmentName}
              </div>
            ))}
      </div>
    </div>
  );
}

export default DepartmentCard;
