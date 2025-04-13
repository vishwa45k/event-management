const passModel = require("../models/pass.model");
const nodemailer = require("nodemailer");

const crypto = require("crypto");
const sendMail = require("../middleware/mail.middleware");
function generatePassId() {
  return "PASS-" + crypto.randomBytes(3).toString("hex").toUpperCase();
}

const buypass = async (req, res, next) => {
  const { email, department, passCount, cardTitle, college, rollNo } = req.body;
  try {
    const passId = generatePassId();
    const pass = new passModel({
      email,
      department,
      passCount,
      passName: cardTitle,
      rollNo,
      college,
      passId: passId,
    });
    await sendMail(
      email,
      "CONGRATS, CHAMP!!!",
      `Your Ticket Id = ${passId}, Thanks for registering`
    );
    await pass.save();

    return res.status(201).json({ message: "purchased successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPassOrders = async (req, res) => {
  try {
    const pass = await passModel.find();
    if (pass.length == 0) {
      return res.status(200).json({
        message: "no pass purchased",
        count: pass.length,
        details: null,
      });
    }
    return res.status(200).json({
      message: `${pass.length} purchased`,
      count: pass.length,
      details: pass,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { buypass, getPassOrders };
