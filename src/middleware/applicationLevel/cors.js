'use strict';

module.exports = (req, res, next) => {
  console.log('in the cors middleware');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accpet, Authorization');
  next();
};
