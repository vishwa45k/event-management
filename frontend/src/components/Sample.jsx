import React, { useState } from "react";
import SportsEventDetails from "./SportsEventDetails";
import SportscardDetails from "./SportscardDetails";

const Sample = () => {
  const [details, setDetails] = useState([]);
  const [newdetails, setnewDetails] = useState({
    count: "",
    cname: "",
    cemail: "",
    cnumber: "",
    cskills: "",
  });

  const addDetails = (e) => {
    e.preventDefault();
    alert("add successfully");
    setDetails([...details, newdetails]);
    setnewDetails({
      count: "",
      cname: "",
      cemail: "",
      cnumber: "",
      cskills: "",
    });
  };

  const handleChangeevent = (e) => {
    setnewDetails({ ...newdetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mx-auto px-4 lg:px-16 pb-12 lg:mt-18 mt-10 font-worksans text-lg">
        <h1 className="flex justify-center text-3xl text-sky-600">
          Department of Physical Education
        </h1>
        <div>
          <form className="bg-white p-6 w-full">
            <div className="grid gap-3 mb-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="md:cols-2 lg:cols-3">
                <label
                  htmlFor="name"
                  className="text-sm block font-medium text-gray-900 pb-3 m-1"
                >
                  Number of event:
                </label>
                <input
                  type="text"
                  name="count"
                  onChange={handleChangeevent}
                  value={newdetails.count}
                  className="bg-gray-50 border border-sky-500 block text-gray-900 text-sm rounded-lg w-full md:w-3/4 p-1.5"
                  required
                />
              </div>
              <div className="md:col-2">
                <label
                  htmlFor="events"
                  className="text-sm block font-medium text-gray-900 pb-3 m-1"
                >
                  Coordinator Name:
                </label>
                <input
                  type="text"
                  name="cname"
                  onChange={handleChangeevent}
                  value={newdetails.cname}
                  className="bg-gray-50 border border-sky-500 block text-gray-900 text-sm rounded-lg w-full md:w-3/4 p-1.5"
                  required
                />
              </div>
              <div className="md:col-2">
                <label
                  htmlFor="name"
                  className="text-sm block font-medium text-gray-900 pb-3 m-1"
                >
                  Coordinator Email:
                </label>
                <input
                  type="text"
                  name="cemail"
                  onChange={handleChangeevent}
                  value={newdetails.cemail}
                  className="bg-gray-50 border border-sky-500 block text-gray-900 text-sm rounded-lg w-full md:w-3/4 p-1.5"
                  required
                />
              </div>
              <div className="md:col-2">
                <label
                  htmlFor="events"
                  className="text-sm block font-medium text-gray-900 pb-3 m-1"
                >
                  Coordinator Number:
                </label>
                <input
                  type="text"
                  name="cnumber"
                  onChange={handleChangeevent}
                  value={newdetails.cnumber}
                  className="bg-gray-50 border border-sky-500 block text-gray-900 text-sm rounded-lg w-full md:w-3/4 p-1.5"
                  required
                />
              </div>
              <div className="md:col-2">
                <label
                  htmlFor="events"
                  className="text-sm block font-medium text-gray-900 pb-3 m-1"
                >
                  Coordinator skill:
                </label>
                <input
                  type="text"
                  name="cskills"
                  onChange={handleChangeevent}
                  value={newdetails.cskills}
                  className="bg-gray-50 border border-sky-500 block text-gray-900 text-sm rounded-lg w-full md:w-3/4 p-1.5"
                  required
                />
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-sky-500 py-3 px-4 text-white rounded-lg"
              onClick={addDetails}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <SportsEventDetails />
      <SportscardDetails />
    </>
  );
};

export default Sample;
