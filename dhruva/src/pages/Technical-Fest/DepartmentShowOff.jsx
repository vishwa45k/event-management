import React, { useEffect, useState } from "react";
import DepartmentCard from "../../components/page-components/DepartmentCard.jsx";
import axios from "axios";
import SkeletonCard from "../../components/page-components/SkeletonCard.jsx";

function DepartmentShowOff() {
  const [departments, setDepartments] = useState([]); // State to hold filtered departments
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const api = import.meta.env.VITE_APP_API;
        const res = await axios.get(`${api}api/get-events`);
        const filteredDepartments = res.data.filter(
          (dept) => dept.events.length !== 0
        );
        setDepartments(filteredDepartments);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartment();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-[1440px]">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          : departments.map((dept, index) => (
              <DepartmentCard events={dept} key={index} />
            ))}
      </div>
    </div>
  );
}

export default DepartmentShowOff;
