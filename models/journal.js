const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const JournalSchema = new Schema ({
    journalDate: {
        type: String, 
        trim: true,
        required: 'Date is Required.',
    },
    journalInput: {
        type: String,
        trim: true,
        required: 'Note is required',
    }
});

const Journal = mongoose.model('Journal', JournalSchema);

module.exports = Journal;