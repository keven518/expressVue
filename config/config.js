var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-vue'
    },
    port: process.env.PORT || 3020,
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-vue'
    },
    port: process.env.PORT || 3020,
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-vue'
    },
    port: process.env.PORT || 3020,
  }
};

module.exports = config[env];
