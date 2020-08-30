'use strict'
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')
const cpus = require('./handlers/cpus')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))
  app.get('/cpus', cpus)
}
