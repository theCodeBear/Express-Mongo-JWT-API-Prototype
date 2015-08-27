'use strict';

const User = require('./../../models/user');

// takes user in req.body, returns saved user and token
module.exports = (req, res) => {
  User.create(req.body.user, (err, user) => {
    if (err) return res.status(500).send(err);
    const token = user.token();
    user = user.sanitize();
    return res.send({user: user, token: token});
  });
};
