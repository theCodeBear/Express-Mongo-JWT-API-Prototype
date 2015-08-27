'use strict';

const User = require('./../../models/user');

// takes user credentials in req.body, sends back auth token
module.exports = (req, res) => {
  User.login(req.body.user, (err, user) => {
    if (err) return res.status(400).send(err);
    const token = user.token();
    user = user.sanitize();
    return res.send({user: user, token: token});
  });
};
