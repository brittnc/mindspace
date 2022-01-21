const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  
  username: {
    type: String,
    trim: true,
    unique: true,
    required: 'Username is Required',
  },
 
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [
      function (input) {
        return input.length >= 6;
      },
      'Password should be longer.',
    ],
  },
 
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
  
  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
  ],

  clinics: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Clinic',
    },
  ],
 
  healthLogs: [
    {
      type: Schema.Types.ObjectId,
      
      ref: 'HealthLog',
    },
  ],
  prescriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Prescription',
    },
  ],
  attachments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Attachement',
    },
  ],
  symptoms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Symptoms',
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
