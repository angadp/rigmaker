'use strict'
var MongoClient = require('mongodb').MongoClient

module.exports = function (req, res) {
MongoClient.connect('mongodb://localhost:27017/rigmaker', function (err, client) {
  if (err) throw err

  var db = client.db('rigmaker')

  db.collection('cpus').find().toArray(function (err, result) {
    if (err) throw err

    res.json(result)
  })
}) 
}