const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  router.route("/")
    .get(isAuthenticated, appointmentsController.findAll)
    .post(appointmentsController.create);

  router.route("/:id")
    .get(isAuthenticated, appointmentsController.findById)
    .put(appointmentsController.update)
    .delete(appointmentsController.remove);

  return router;
}


