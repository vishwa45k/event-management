const { default: mongoose } = require("mongoose");
const userSchema = require("./../schema/user.schema.js");

module.exports = mongoose.model("user-model", userSchema, "user-info");
