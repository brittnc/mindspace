const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mindspace',{
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,

});


const prescriptionSeed = [
  {
    prescriptionName: 'lansiprosole',
    amount: '10mLs',
    timesaday: 2,
    dateprescribed: '10/16/16',
    doctorprescibed: 'Dr. Kristin King',
    generalinstructions: 'Take half hour before breakfast and dinner.',
  },
  {
    prescriptionName: 'prednisolone',
    amount: '10mLs',
    timesaday: 2,
    dateprescribed: '10/16/17',
    doctorprescibed: 'Dr. Kristin King',
    generalinstructions: 'Prescription dose increased. Take with meds, be careful about taking too close to bed time.',
  },
  {
    prescriptionName: 'singulair',
    amount: '5mL disolvable tablet',
    timesaday: 1,
    dateprescribed: '10/16/17',
    doctorprescibed: 'Dr. Larry Lungs',
    generalinstructions: 'Take at bed time. Can cause night-terrors',
  },
  {
    prescriptionName: 'qnasl',
    amount: '1 spray each nostril',
    timesaday: 1,
    dateprescribed: '10/16/18',
    doctorprescibed: 'Dr. Sam Sneezy',
    generalinstructions: 'Difficult to take, hurts at first. Do in the morning 15minutes after any other nose sprays',
  },
];

db.Prescription
  .remove({})
  .then(() => db.Prescription.collection.insertMany(prescriptionSeed))
  .then((data) => {
    console.log(data.insertedIds.length + ' prescription list records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

