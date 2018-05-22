var fs= require("fs");

module.exports = function(app) {

    // app.get('/listUsers', function (req, res) {
    //     fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    //         console.log(data);
    //         res.end(data);
    //     });
    // });
    
    app.get('/users', function (req, res) {
        fs.readFile(__dirname + "/users.json", function (err, data) {
            res.send(data);
        });
    });
    
    app.get('/users/:id', function (req, res) {
        var id = req.params.id;
        fs.readFile(__dirname + "/users.json", function (err, data) {
            var users = JSON.parse(data);
            var user = users["user" + id];
            console.log(user);
            res.send(user);
        });
    });

    app.delete('/deleteUser', function(req, res){
        fs.readFile(__dirname+"/"+"users.json",'utf8', function(err, data){
            data= JSON.parse(data);
            delete data["user"+2];
            console.log(data);
            res.end(JSON.stringify(data));
        });
    });

    app.post('/addUser', function(req,res) {
        var adduser= {
            "user4":{
                "name": "mohit",
                "password":"pwd4",
                "prefession":"teacher",
                "id":4
            }
        }
        fs.readFile(__dirname+"/"+"users.json",'utf8', function(err, data){
        data= JSON.parse(data);
        data["user4"]=adduser["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
        });
    });   
}