const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  skills: { type: String, required: true },
  description: { type: String, required: true },
  hired: { type: Boolean, default: false },
  employmentType: { type: String, required: true },
  experience: { type: String },
  company: { type: String },
  yearsOfExperience: { type: Number },
  hourlyRate: { type: Number },
  availability: { type: Number },
  linkedin: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Developer', developerSchema);