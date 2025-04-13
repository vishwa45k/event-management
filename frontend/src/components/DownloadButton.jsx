import React from "react";
import axios from "axios";

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/download-excel-file",
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Create a temporary download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "pass-purchases.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-sky-400 text-white px-4 py-2 rounded shadow hover:bg-sky-700"
    >
      Download Excel
    </button>
  );
};

export default DownloadButton;
