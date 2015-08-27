'use strict';

const mongoose = require('mongoose'),
      jwt = require('jwt-simple'),
      moment = require('moment');

const userSchema = new mongoose.Schema({
  email:        { type: String, required: true },
  password:     { type: String, required: true }
});


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
