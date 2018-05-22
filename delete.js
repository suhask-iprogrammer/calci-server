var id=2;

app.delete('/deleteUser', function(req, res){
    fs.readFile(__dirname+"/"+"users.json",'utf8', function(err, data){
        data= JSON.parse(data);
        delete data["user"+2];

        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server= app.listen(8081, function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("This server is listening at https://%s%s", host,port);
})