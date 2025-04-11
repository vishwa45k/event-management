const express = require("express");
const { signup, login } = require("../controllers/user.controller");

const app = express.Router();

app.post("/register", signup);

app.post("/signin", login);

module.exports = app;
