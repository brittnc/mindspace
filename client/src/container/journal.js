const db = require ('../models');

// Defining methods for the journal
module.exports = {
    findAll: function (req, res) {
        db.Journal
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create(req, res) {
        db.Journal
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Journal
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the findbyid Journal is not working in journal.js error: ' + err));
    },
    update: function (req, res) {
        db.Journal
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the update Journal is not working in journal.js error: ' + err));
    },
    remove: function (req, res) {
        db.Journal
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json (dbModel))
            .catch(err => console.log('the remove Journal is not working in journal.js error: ' + err))
    },
};