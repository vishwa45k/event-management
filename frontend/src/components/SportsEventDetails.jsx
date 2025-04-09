import React, { use, useState } from "react";

function SportsEventDetails() {
  // scriptedcode -->
  // const [data, setData] = useState({ eventname: "", date: "", location: "" });
  // const handleData = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const [selectedSports, setSelectedSports] = useState([]);
  // const handleSelectChange = (event) => {
  //   const selectedOptions = Array.from(
  //     event.target.selectedOptions,
  //     (option) => option.value
  //   );
  //   setSelectedSports(selectedOptions);
  // };

  const [formList, setFormList] = useState([]);
  const [formData, setFormData] = useState({
    eventName: "",
    eventLocation: "",
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  });

  const addEvents = (e) => {
    e.preventDefault();
    setFormList([...formList, formData]);
    alert("event added");
    console.log(formList);
    setFormData({
      eventName: "",
      eventLocation: "",
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date().toISOString().split("T")[0],
    });
  };
  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" container mx-auto px-4 lg:px-16 pb-12 lg:mt-16 m font-worksans text-lg">
      <p className="h1 text-3xl flex justify-center text-sky-500">
        Event location details
      </p>
      <form className="bg-white p-6  w-full " onSubmit={addEvents}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3 me-3">
          <div className="md:cols-2 lg:grid-cols-3 ">
            <label className="text-sm font-medium block pb-3">
              Event Name:
            </label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleData}
              className="text-sm border p-1.5 border-sky-500 block w-full md:w-3/4 rounded-lg focus:border-yellow-400 focus:ring focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium block pb-3 ">
              Event Location:
            </label>
            <input
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleData}
              className="text-sm border p-1.5 border-sky-500 block w-full md:w-3/4 rounded-lg focus:border-yellow-400 focus:ring focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium block pb-2 m-1">
              Event Time:
            </label>
            <div className="flex space-x-2">
              <input
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleData}
                className="border border-gray-300 rounded-lg px-2 focus:border-sky-500 focus:ring focus:ring-sky-300"
              />
              <span className="text-gray-600">to</span>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleData}
                className="border border-gray-300 rounded-lg px-2 focus:border-sky-500 focus:ring focus:ring-sky-300"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-sky-400 px-4 py-3 m-3 rounded-lg text-white animate-bounce">
            onSubmit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SportsEventDetails;
