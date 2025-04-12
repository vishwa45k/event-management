import React, { useEffect, useState } from "react";
import DepartmentCard from "../../components/page-components/DepartmentCard.jsx";
import axios from "axios";
// import department from "@/data/Departments";

function DepartmentShowOff() {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/get-events"
        );
        setDepartment(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDepartment();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-[1440px]">
        {department.map((dept, index) => (
          <DepartmentCard events={dept} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DepartmentShowOff;
