module.exports = function(app, mongoose, User) {
  const passport = require('passport');
  const session = require('express-session');
  const MongoStore = require('connect-mongo')(session);
  const LocalStrategy = require('passport-local');
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function() {
    console.log('You are connected!');
  });

  app.use(
    session({
      secret: 'french toast',
      store: new MongoStore({
        mongooseConnection: db,
        touchAfter: 24 * 3600,
        autoRemove: 'disabled'
      }),
      resave: false,
      saveUninitialized: true
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!(user.password === password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  return passport;
}