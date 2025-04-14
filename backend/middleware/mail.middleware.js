const { configDotenv } = require("dotenv");
const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendMail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: `"Event Team"${process.env.EMAIL} `,
      to,
      subject,
      text,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("message id :", info.messageId);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendMail;
