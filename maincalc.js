var express = require('express');
var router = express.Router();
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*"); 
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
     next(); 
});

var addition = require('./addition.js');
app.use("/", addition);
var substract = require('./subs.js');
app.use("/", substract);
var multiply = require('./multi.js');
app.use("/", multiply);
var division = require('./div.js');
app.use("/", division);

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("This server is listening at https://%s%s", host, port);
});