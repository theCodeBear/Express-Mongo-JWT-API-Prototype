'use strict';

const mongoose = require('mongoose'),
      jwt = require('jwt-simple'),
      moment = require('moment'),
      bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email:        { type: String, required: true },
  password:     { type: String, required: true },
  createdAt:    { type: Date, default: Date.now, required: true }
});

userSchema.statics.create = (user, cb) => {
  User.findOne({email: user.email}, (err, dbUser) => {
    if (err) return cb('Database Error');
    if (dbUser) return cb('User with that email already exists');
    dbUser.password = bcrypt.hashSync(dbUser.password, 8);
    let newUser = new User(dbUser);
    newUser.save((err, savedUser) => {
      if (err || !savedUser) return cb('Error saving user');
      cb(null, savedUser);
    });
  });
};

// user parameter is email and password
userSchema.statics.login = (creds, cb) => {
  User.findOne({email: creds.email}, (err, user) => {
    if (err) return cb('Error finding user');
    if (!user) return cb('Your email or password did not match');
    if (bcrypt.compareSync(creds.password, user.password))
      return cb(null, user);
    else
      return cb('Your email or password did not match');
  });
};

userSchema.methods.token = () => {
  let payload = {
    sub: this._id,
    iat: moment().unix(),
    exp: moment().add('30', 'days')
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
};

userSchema.methods.sanitize = () => {
  let userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
