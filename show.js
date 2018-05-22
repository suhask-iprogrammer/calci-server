app.get('/users', function (req, res) {
    fs.readFile(__dirname + "/users.json", function (err, data) {
        res.send(data);
    });
});

app.get('/users/:id', function (req, res) {
    var id = req.params.id;
    fs.readFile(__dirname + "/users.json", function (err, data) {
        var users = JSON.parse(data);
        // var user=users["users"+id];
        var user = users["user" + id]
        console.log(user);
        res.send(user);
    });
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("This server is listening at https://%s%s", host, port);
})