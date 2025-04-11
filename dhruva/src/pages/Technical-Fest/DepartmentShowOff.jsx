import React from "react";
import DepartmentCard from "../../components/page-components/DepartmentCard.jsx";
import department from "@/data/Departments";

function DepartmentShowOff() {
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
