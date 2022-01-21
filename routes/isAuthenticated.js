// from Stack Overflow
module.exports = function (req, res, next) {
 
  console.log('checking if user is authenticated!!')
  if (req.isAuthenticated()) {
    console.log('authentication was successful!')
    return next();
  }
  console.log('authentication was not successful...')
  res.redirect('/');


}


