'use strict';

const jwt = require('jwt-simple');

module.exports = (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1];
  try {
    jwt.decode(token, process.env.TOKEN_SECRET);
  } catch(err) {
    return res.status(401).send('You are not logged in');
  }
  next();
};
