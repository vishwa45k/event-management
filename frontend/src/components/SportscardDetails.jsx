import React, { useState } from "react";

function SportscardDetails() {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState("");
  const [SportsList, setSportsList] = useState([]);

  const [newData, setData] = useState({
    sportname: "",
    url: "",
    description: "",
    coordinatorName: "",
    coordinatornumber: "",
    eventLocation: "",
    date: new Date().toISOString().split("T")[0],
    time: "",
    price: "",
    rules: [],
  });

  const addRule = (e) => {
    e.preventDefault();
   
      setRules([...rules, newRule]);
      setNewRule("");
    
  };

  const handleInputRules = (e) => {
    setNewRule(e.target.value);
  };

  const handleData = (e) => {
    setData({ ...newData, [e.target.name]: e.target.value });
  };

  const addsport = (e) => {
    e.preventDefault();
    setSportsList([...SportsList, { ...newData, rules }]);
    alert("Sport added");

    // Reset form and rules
    setData({
      sportname: "",
      url: "",
      description: "",
      coordinatorName: "",
      coordinatornumber: "",
      eventLocation: "",
      date: new Date().toISOString().split("T")[0],
      time: "",
      price: "",
      rules: [],
    });
    setRules([]); // Reset rules separately
  };

  return (
    <div className="container mx-auto px-4 lg:px-16 pb-12 lg:mt-18 mt-10 font-worksans text-lg">
      <h1 className="text-sky-500 text-3xl flex justify-center">
        Event Sports Details
      </h1>
      <form>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
          <div>
            <label className="block font-medium py-3">Sports Name:</label>
            <input
              type="text"
              name="sportname"
              value={newData.sportname}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Image URL:</label>
            <input
              type="text"
              name="url"
              value={newData.url}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Description:</label>
            <input
              type="text"
              name="description"
              value={newData.description}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Coordinator Name:</label>
            <input
              type="text"
              name="coordinatorName"
              value={newData.coordinatorName}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">
              Coordinator Number:
            </label>
            <input
              type="text"
              name="coordinatornumber"
              value={newData.coordinatornumber}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Location:</label>
            <input
              type="text"
              name="eventLocation"
              value={newData.eventLocation}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Date:</label>
            <input
              type="date"
              name="date"
              value={newData.date}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Time:</label>
            <input
              type="time"
              name="time"
              value={newData.time}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>
          <div>
            <label className="block font-medium py-3">Price:</label>
            <input
              type="text"
              name="price"
              value={newData.price}
              onChange={handleData}
              className="text-sm border border-sky-500 rounded-lg w-full md:w-3/4 p-1.5 block"
            />
          </div>

          {/* Tournament Rules */}
          <div>
            <label className="text-xl font-medium block mb-2">
              Tournament Rules
            </label>
            <div className=" block">
              <input
                type="text"
                value={newRule}
                onChange={handleInputRules}
                className="w-full md:w-1/2 border mb-3 border-sky-500 p-1.5  rounded-lg"
              />

              <button
                type="button"
                className="bg-sky-500 mx-3 px-5 py-2 text-white rounded "
                onClick={addRule}
              >
                Add Rule
              </button>

              {/* Display Rules */}
            </div>

            {/* Buttons */}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-sky-500 px-5 py-2 text-white rounded block animate-bounce"
            onClick={addsport}
          >
            {" "}
            Add New Sport
          </button>
        </div>
      </form>
    </div>
  );
}

export default SportscardDetails;
