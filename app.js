require('dotenv').load();
var express = require('express');
var db = require('./config/db');
var Name = require('./models/name');
var app = express();

app.use(function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  next();
});

app.get('/', function(request, response) {
  Name
    .find()
    .then(function(names) {
      response.json(names);
    });
});

app.listen(3030, function() {
  console.log('Listening on http://localhost:3030...');
});
