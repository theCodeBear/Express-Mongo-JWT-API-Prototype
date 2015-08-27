'use strict';

const mw = require('./middleware');

module.exports = (router) => {
// users
  router.get('/users/', require('./../routes/user/index'));
  router.post('/users', require('./../routes/user/create'));
  router.put('/users/:userId', require('./../routes/user/update'));
  router.get('/users/:userId', require('./../routes/user/show'));
  router.delete('/users/:userId', require('./../routes/user/destroy'));
  router.post('/users/login', require('./../routes/user/login'));
};
