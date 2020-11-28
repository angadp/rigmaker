'use strict'
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')
const cpus = require('./handlers/cpus')
const login = require('./handlers/login')
const rig = require('./handlers/rig')
const addRig = require('./handlers/addRig')
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))
  app.get('/cpus', cpus)
  app.post('/login', login)
  app.get('/rig', rig)
  app.get('/addRig', addRig)
}
