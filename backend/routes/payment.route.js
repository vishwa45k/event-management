const express = require("express");
const createOrder = require("../controllers/payment.controller");

const app = express.Router();

app.post("/create-order", createOrder);
app.post("/buy-pass", )

module.exports = app;
