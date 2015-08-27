'use strict';

// here add whatever validation rules you have for login creds
module.exports = (req, res, next) => {
  const password = req.body.user.password;
  const email = req.body.user.email;
  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).send('Password does not match criteria');
  }
  next();
};