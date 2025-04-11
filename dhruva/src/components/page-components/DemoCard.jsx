import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export function DemoCard({ title, imageUrl, price }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    college: "",
    department: "",
    passCount: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "passCount" ? parseInt(value) : value,
    }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const totalAmount = formData.passCount * price;
    const razorpayId = import.meta.env.VITE_RAZORPAY_KEY;
    const res = await loadRazorpayScript();
    if (!res) {
      Swal.fire({
        icon: "error",
      });
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/create-order",
        {
          amount: totalAmount,
          currency: "INR",
        }
      );

      const options = {
        key: razorpayId,
        amount: data.amount,
        currency: data.currency,
        name: "Event Registration",
        description: `Registration for ${title}`,
        order_id: data.id,
        handler: function (response) {
          Swal.fire({
            icon: "success",
            title: "Payment Successful!",
            text: `Payment ID: ${response.razorpay_payment_id}`,
            timer: 4000,
          });
        },
        prefill: {
          name: formData.name,
          email: "",
          contact: "",
        },
        notes: {
          college: formData.college,
          department: formData.department,
          rollno: formData.rollno,
        },
        theme: {
          color: "#0ea5e9",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to create order", "error");
    }

    setIsModalOpen(false);
    setFormData({
      name: "",
      rollno: "",
      college: "",
      department: "",
      passCount: 1,
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          <div className="bg-black h-80 rounded-xl relative overflow-hidden shadow-xl p-4">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="relative z-10 text-white text-center flex flex-col justify-between h-full">
              <h1 className="text-2xl font-bold">{title}</h1>
              <div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white rounded-lg py-2 transition"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-center text-sky-700 mb-4">
              Register
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2"
                required
              />
              <input
                type="text"
                name="rollno"
                placeholder="Roll Number"
                value={formData.rollno}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2"
                required
              />
              <input
                type="text"
                name="college"
                placeholder="College"
                value={formData.college}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2"
                required
              />
              <select
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2"
                required
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="IT">IT</option>
                <option value="MECH">MECH</option>
              </select>
              <input
                type="number"
                name="passCount"
                min="1"
                max="3"
                value={formData.passCount}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-2"
                required
              />
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg"
              >
                Pay ₹{formData.passCount * price}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
