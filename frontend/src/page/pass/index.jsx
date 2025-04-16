import React, { useEffect, useState } from "react";
import PurchaseTable from "./PassTable";
import axios from "axios";

function PassDetails() {
  const [data, setData] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all purchase data on mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://event-management-dhruva-production.up.railway.app/api/get-purchase-list`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching all purchase data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      fetchAllData();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `https://event-management-dhruva-production.up.railway.app/api/get-email-pass`,
        { email }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-center text-2xl font-bold my-4">Pass Purchases</h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center gap-2 mb-4"
      >
        <input
          type="email"
          placeholder="Enter email to search"
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : data && data.details?.length > 0 ? (
        <PurchaseTable data={data} />
      ) : (
        <p className="text-center text-gray-500">No data found</p>
      )}
    </div>
  );
}

export default PassDetails;
