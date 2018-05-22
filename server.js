var express = require('express');
var app = express();

var trial = require('./trial.js')(app);
var post = require('./post.js')(app);


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("This server is listening at https://%s%s", host, port);
});