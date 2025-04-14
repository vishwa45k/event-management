const razorPay = require("../utils/razorpay.util.js");
const payment = require("../models/payment.model.js");
const createOrder = async (req, res, next) => {
  try {
    const { amount, currency, receipt, name, rollNo, department, college } =
      req.body;
    const options = {
      amount: amount * 100,
      currency,
      receipt,
    };

    const order = await razorPay.orders.create(options);
    const userInfo = new payment({
      name,
      rollNo,
      department,
      college,
    });
    await userInfo.save();
    return res.status(201).json({
      message: "order purchased successfully",
      orderId: order.id,
      amount: order.amount,
      receipt: order.receipt,
      currency: order.currency,
      user: userInfo,
    });
  } catch (error) {
    console.error("Payment Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};



module.exports = createOrder;
