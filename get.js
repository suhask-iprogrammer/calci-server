var express= require('express');
var app= express();
var fs= require("fs");
var router= express.router();       

router.get('/users', function (req, res) {
    fs.readFile(__dirname + "/users.json", function (err, data) {
        res.send(data);
    });
});

router.get('/users/:id', function (req, res) {
    var id = req.params.id;
    fs.readFile(__dirname + "/users.json", function (err, data) {
        var users = JSON.parse(data);
        var user = users["user" + id];
        console.log(user);
        res.send(user);
    });
});
app.use('/users', router);

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("This app is listening at https://%s%s", host, port);
})