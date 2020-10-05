'use strict'
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')

module.exports = function (req, res) {
console.log(req.body);
MongoClient.connect('mongodb://localhost:27017/rigmaker', function (err, client) {
  if (err) throw err

  var db = client.db('rigmaker')

  db.collection('login').findOne({'username':req.body.username, 'password':req.body.password}, function(err, result) {
    if (err) res.json(err);
    else{
    	db.collection('user').findOne({'username':req.body.username} , function(err, result) {
    	if (err) res.json(err);
    	res.json(result);
	});
    }
  })
}) 
}