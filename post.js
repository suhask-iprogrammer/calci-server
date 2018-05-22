var user= {
    "user4":{
        "name": "mohit",
        "password":"pwd4",
        "prefession":"teacher",
        "id":4
    }
}

app.post('/addUser', function(req,res) {
    fs.readFile(__dirname+"/"+"users.json",'utf8', function(err, data){
        data= JSON.parse(data);
        data["user4"]=user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server= app.listen(8081,function(){
    var host= server.address().address;
    var port= server.address().port;

    console.log("This server is listening at https://%s%s",host, port);
})
