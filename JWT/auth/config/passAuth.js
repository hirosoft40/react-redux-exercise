// 2 strategies
//3. Tell passport to use strategy

// Local Strategy
//1. setup strategy options
//2. create JWT strategy
//3. Tell passport to use strategy

const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport.jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
const config = require("../config");
const db = require("../models");

//JWT strategy
//1. setup strategy options
const jwtOptions = {
  secretOrKey: config.secret,
  jwtFormRequest: ExtractJwt.fromHeader("authorization")
};

//2. create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  db.user
    .findById(payload.sub)
    .then(() => {
      if (foundUser) {
        done(null, foundUser);
      } else {
        done(null, false);
      }
    })
    .catch(error => {
      done(error, false);
    });
});

// Local Strategy
// 1. setup strategy options
const localOptions = {
  usernameField: "email"
};

//2. create Local Strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  db.user.findAll({ where: { email: email } }).then(results => {});
});
