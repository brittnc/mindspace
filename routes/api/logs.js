const router = require("express").Router();
const logsController = require("../../controllers/healthLogController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  router.route("/")
    .get(isAuthenticated, logsController.findAll)
    .post(logsController.create);

  router.route("/:id")
    .get(isAuthenticated, logsController.findById)
    .put(logsController.update)
    .delete(logsController.remove);

  return router;
}

