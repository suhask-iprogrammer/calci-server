// module.exports = function (router) {
//     router.post('/substraction', (req, res, next) => {
//         
//     });
// }


var express = require('express')
var router = express.Router()

router.post('/substraction', function (req, res) {
    var number1 = parseInt(req.body.number1);
    var number2 = parseInt(req.body.number2);
    var result = number1 - number2;
    console.log(result);
    res.send(JSON.stringify(result));
})

module.exports = router