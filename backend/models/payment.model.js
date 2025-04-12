const mongoose = require("mongoose");
const paymentSchema = require("../schema/payment.schema");

module.exports = new mongoose.model(
  "payment",
  paymentSchema,
  "payment-user-info"
);
