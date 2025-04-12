import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DepartmentCard() {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/get-events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => console.error("Error fetching departments:", error));
  }, []);

  return (
    <div className="p-4 md:px-28">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 font-worksans">
        {departments.map((department, index) => (
          <div
            key={index}
            onClick={() => navigate(`/department/${department.departmentName}`)}
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
