'use strict';

module.exports = {
// APPLICATION LEVEL MIDDLEWARE TO BE RUN ON ALL ROUTES
  cors: require('./../middleware/applicationLevel/cors'),

// ROUTER LEVEL MIDDLEWARE TO BE RUN ON SPECIFIC ROUTES
  authentication: require('./../middleware/routerLevel/authentication')
};
