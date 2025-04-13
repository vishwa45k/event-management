const { default: mongoose } = require("mongoose");
const passSchema = require("../schema/pass.schema");

module.exports = mongoose.model("passModel", passSchema, "pass-info");
