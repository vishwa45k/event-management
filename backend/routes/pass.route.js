const express = require("express");
const {
  buypass,
  getPassOrders,
  exportPassList,
} = require("../controllers/pass.controller");

const app = express.Router();

app.post("/buy-pass", buypass);

app.get("/get-purchase-list", getPassOrders);

app.get("/download-excel-file", exportPassList);
app.get("/get-pass-email", )
module.exports = app;
