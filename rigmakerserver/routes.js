'use strict'
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')
const cpus = require('./handlers/cpus')
const login = require('./handlers/login')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))
  app.get('/cpus', cpus)
  app.post('/login', login)
}
