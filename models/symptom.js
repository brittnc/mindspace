const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SymptomSchema = new Schema({
  symptomType: {
    type: String,
    trim: true,
    required: 'Type is required.',
  },
  symptomDate: {
    type: String,
    trim: true,
    required: 'Date is required.',
  },
  symptomTime: {
    type: String,
    trim: true,
    required: 'Time is required',
  },

  symptomInfo: {
    type: String,
    trim: true,
    required: 'Note is required',
  },
});

const SymptomJournal = mongoose.model('SymptomJournal', SymptomSchema);

module.exports = SymptomJournal;
