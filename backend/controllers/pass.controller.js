const passModel = require("../models/pass.model");
const nodemailer = require("nodemailer");
const excel = require("exceljs");
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

const exportPassList = async (req, res) => {
  try {
    const data = await passModel.find();

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Pass Purchases");

    worksheet.columns = [
      { header: "#", key: "index", width: 10 },
      { header: "Email", key: "email", width: 30 },
      { header: "College", key: "college", width: 30 },
      { header: "Department", key: "department", width: 20 },
      { header: "Pass", key: "passName", width: 20 },
      { header: "Pass Count", key: "passCount", width: 15 },
      { header: "Roll No", key: "rollNo", width: 20 },
      { header: "Pass ID", key: "passId", width: 20 },
    ];

    data.forEach((item, index) => {
      worksheet.addRow({
        index: index + 1,
        email: item.email,
        college: item.college,
        department: item.department,
        passName: item.passName,
        passCount: item.passCount,
        rollNo: item.rollNo,
        passId: item.passId ? item.passId : "N/A",
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=pass-purchases.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Error exporting data to Excel:", error);
    res.status(500).send("Error exporting data.");
  }
};

module.exports = { buypass, getPassOrders, exportPassList };
