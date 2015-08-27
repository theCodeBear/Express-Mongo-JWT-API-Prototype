'use strict';

const User = require('./../../models/user');

// takes userId in params
module.exports = (req, res) => {
  User.findByIdAndRemove(req.params.userId, (err, user) => {
    if (err) return res.status(500).send('Error trying to delete user');
    if (!user) return res.status(500).send('No user found to delete');
    return res.status(200).end();
  });
};
