import React from "react";
import DownloadButton from "../../components/DownloadButton";

const PurchaseTable = ({ data }) => {
  if (!data || !data.details) {
    return (
      <p className="text-center text-gray-500">
        Loading or no data available...
      </p>
    );
  }
  const requestPassDetails = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 max-w-7xl mx-auto overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-sm md:text-base">#</th>
            <th className="border px-4 py-2 text-sm md:text-base">Email</th>
            <th className="border px-4 py-2 text-sm md:text-base">College</th>
            <th className="border px-4 py-2 text-sm md:text-base">
              Department
            </th>
            <th className="border px-4 py-2 text-sm md:text-base">Pass</th>
            <th className="border px-4 py-2 text-sm md:text-base">
              Pass Count
            </th>
            <th className="border px-4 py-2 text-sm md:text-base">Roll No</th>
            <th className="border px-4 py-2 text-sm md:text-base">Pass ID</th>
          </tr>
        </thead>
        <tbody>
          {data.details.map((item, index) => (
            <tr key={item._id} className="text-center hover:bg-sky-300">
              <td className="border px-4 py-2 text-xs md:text-sm">
                {index + 1}
              </td>
              <td className="border px-4 py-2 text-xs md:text-sm">
                {item.email}
              </td>
              <td className="border px-4 py-2 text-xs md:text-sm">
                {item.college}
              </td>
              <td className="border px-4 py-2 text-xs md:text-sm">
                {item.department}
              </td>
              <td className="border px-4 py-2 text-xs md:text-sm">
                {item.passName}
              </td>
              <td className="border px-4 py-2 text-xs md:text-sm">
                {item.passCount}
              </td>
              <td className="border px-4 py-2 text-xs md:text-sm">
                {item.rollNo}
              </td>
              <td className="border px-4 py-2 text-xs md:text-sm">
                {item.passId?.includes("function")
                  ? "N/A"
                  : item.passId || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-auto py-12"> 
        <DownloadButton />
      </div>
    </div>
  );
};

export default PurchaseTable;
