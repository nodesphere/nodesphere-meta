require('newrelic');
var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

PUBLIC_PATH = path.resolve(__dirname, 'dist/');

app.get('*', function (req, res) {
	res.sendfile(PUBLIC_PATH + req.url);
});

port = process.env.PORT || 5555
if (server.listen(port))
  console.log("...listening up on " + port); 

