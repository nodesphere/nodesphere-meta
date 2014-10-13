require('newrelic');
var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

ROOT_PATH = path.resolve(__dirname, 'dist/');

app.get('*', function (req, res) {
	res.sendfile(ROOT_PATH + req.url);
});

port = process.env.PORT || 5555
if (server.listen(port))
  console.log("...listening up on " + port); 

