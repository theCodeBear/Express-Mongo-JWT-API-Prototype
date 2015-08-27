'use strict';

const express = require('express'),
      router = express.Router(),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      middleware = require('./config/middleware'),
      app = express(),
      http = require('http').Server(app);

// run some basic Express third-party middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// run application-level middleware (before all routes)
app.use(middleware.cors);

// let app know about all API routes and set to root '/' path
require('./config/routes')(router);
app.use('/', router);

// run application-level middleware (after all routes)
// ... no 'after middleware yet

// connect to mongoDB with apiStarter database
mongoose.connect('mongodb://localhost/apiStarter');

// run Express web server
http.listen(3000, () => {
  console.log(`Serving on port: ${http.address().port}`);
});

module.exports = app;
