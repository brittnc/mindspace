const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema; 

//new Journal Log Object to save journal information. 
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

// This creates our model form the above schema, using mongoose's model method
const Journal = mongoose.model('Journal', JournalSchema);

//export the journal model 
module.exports = Journal;