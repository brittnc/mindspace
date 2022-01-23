const mongoose = require("mongoose");
const db = require("../models");

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mindspace", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

const doctorSeed = [
  {
    firstname: "Dr.",
    lastname: "Papeer",
    clinic: "Clinic A",
    phone: "666-666-6666",
  },
  {
    firstname: "Steven",
    lastname: "Strange",
    clinic: "Clinic B",
    phone: "555-555-5555",
  },
  {
    firstname: "Martin",
    lastname: "King",
    clinic: "Clinic C",
    phone: "444-444-4444",
  },
  {
    firstname: "Angela",
    lastname: "Krider",
    clinic: "Clinic G",
    phone: "999-999-9999",
  },
  {
    firstname: "Mucous",
    lastname: "Membrane",
    clinic: "Clinic M",
    phone: "000-000-0000",
  },
  {
    firstname: "Dr.",
    lastname: "J-Honny",
    clinic: "Clinic J",
    phone: "000-000-0000",
  },
  {
    firstname: "Dougie",
    lastname: "Evil",
    clinic: "Clinic E",
    phone: "333-333-3333",
  },
];

db.Doctor.remove({})
  .then(() => db.Doctor.collection.insertMany(doctorSeed))
  .then((data) => {
    console.log(data.insertedIds.length + " doctors inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
