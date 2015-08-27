'use strict';

const User = require('./../../models/user');

// takes user id as params userId
module.exports = (req, res) => {
  User.findById(req.params.userId).select('-password').exec((err, user) => {
    if (err) return res.status(500).send('Error finding user');
    if (!user) return res.status(500).send('User not found');
    return res.status(200).send({user: user});
  });
};
