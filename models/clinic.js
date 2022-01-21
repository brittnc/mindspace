const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClinicSchema = new Schema({
  clinicname: {
    type: String,
    trim: true,
    required: 'Clinic name is required',
  },
  address: {
    type: String,
    trim: true,
    required: 'Address is required',
  },

  city: {
    type: String,
    trim: true,
    required: 'Address is required',
  },

  state: {
    type: String,
    trim: true,
    required: 'State is Required',
  },

  zip: {
    type: Number,
    trim: true,
    required: 'Zip is Required',
  },

  phone: {
    type: Number,
    trim: true,
    match: /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,
    required: 'Phone is Required',
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const Clinic = mongoose.model('Clinic', ClinicSchema);

module.exports = Clinic;
