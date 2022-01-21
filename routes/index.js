const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const Auth = require('./api/Auth');

module.exports = function(passport, User) {
  // API Routes
  router.use('/api', apiRoutes(passport));
  router.use('/Auth', Auth(passport, User)); 

  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
  return router
}

