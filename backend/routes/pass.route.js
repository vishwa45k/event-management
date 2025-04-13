const express = require("express");
const { buypass, getPassOrders } = require("../controllers/pass.controller");

const app = express.Router();

app.post("/buy-pass", buypass);

app.get("/get-purchase-list", getPassOrders);

module.exports = app;
