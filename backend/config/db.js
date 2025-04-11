const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      connectTimeoutMS: 5000,
    });
    console.log("db conncted");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDB;
