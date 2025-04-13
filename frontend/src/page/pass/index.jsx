import React, { useEffect, useState } from "react";
import PurchaseTable from "./PassTable";
import axios from "axios";

function PassDetails() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/get-purchase-list"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching purchase list:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Pass Purchases</h1>
      {data ? (
        <PurchaseTable data={data} />
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default PassDetails;
