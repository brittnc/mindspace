const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mindspace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

const doctorSeed = [
  {
    firstname: 'Dr.',
    lastname: 'Papeer',
    clinic: 'Clinic A',
    phone: '666-666-6666',
  },
  {
    firstname: 'Jimmy',
    lastname: 'Johns',
    clinic: 'Clinic B',
    phone: '555-555-5555',
  },
  {
    firstname: 'Queen',
    lastname: 'King',
    clinic: 'Clinic C',
    phone: '444-444-4444',
  },
];

db.Doctor.remove({})
  .then(() => db.Doctor.collection.insertMany(doctorSeed))
  .then((data) => {
    console.log(data.insertedIds.length + ' doctors inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
