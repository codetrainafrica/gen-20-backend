const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  name: String,
  branch: String,
});

const banksModel = mongoose.model("banks", bankSchema);

module.exports = banksModel;
