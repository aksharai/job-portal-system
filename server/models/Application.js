const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  name: String,
  jobTitle: String,
  skills: String,
  matchStatus: String
});

module.exports = mongoose.model("Application", ApplicationSchema);