'use strict';

const User = require('./../../models/user');

module.exports = (req, res) => {
  User.find().select('-password').exec((err, users) => {
    if (err) return res.status(500).send('Error finding users');
    return res.send({users: users});
  });
};
