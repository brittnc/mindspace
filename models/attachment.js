const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttachmentSchema = new Schema({
  date: {
    type: Date,
    trim: true,
    required: 'Date is required',
  },
  // this is populated by dropdown
  doctor: {
    type: String,
    trim: true,
    required: 'Doctor is required',
  },
  subject: {
    type: String,
    trim: true,
    required: 'Subject is required',
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const Attachment = mongoose.model('Attachment', AttachmentSchema);

module.exports = Attachment;
