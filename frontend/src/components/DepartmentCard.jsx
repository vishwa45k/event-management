import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DepartmentCard() {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => console.error("Error fetching departments:", error));
  }, []);
  

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-5 font-worksans text-lg">
        {departments.map((department, index) => (
          <div
            key={index}
            className="p-5 bg-blue-500 text-white rounded-lg cursor-pointer"
            onClick={() => navigate(`/department/${department.departmentName}`)}
          >
            {department.departmentName}{" "}
            {/* ✅ Ensure you're displaying a string */}
          </div>
        ))}
      </div>
    </>
  );
}

export default DepartmentCard;
