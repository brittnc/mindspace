const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HealthLogSchema = new Schema({
  date: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  doctor: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  visitPurpose: {
    type: String,
    trim: true,
    required: 'Specialty is Required',
  },
  notes: {
    type: String,
    trim: true,
    required: 'Specialty is Required',
  }, 
  heightIn: {
    type: Number,
    trim: true,
  },
  weightLb: {
    type: Number,
    trim: true,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const HealthLog = mongoose.model('HealthLog', HealthLogSchema);

module.exports = HealthLog;
