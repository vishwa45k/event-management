require("dotenv").config(); 

const Razorpay = require("razorpay");

const razorPay = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_KEY_SECRET,
});

module.exports = razorPay;
