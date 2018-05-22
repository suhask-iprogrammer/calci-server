var express= require('express');
var router= express.Router();

router.post('/division', function(req,res) {
    var num1= parseInt(req.body.number1);
    var num2= parseInt(req.body.number2);
    var result= num1/num2;
    console.log(result);
    res.send(JSON.stringify(result));
});

module.exports= router;
