//bring in the espress server and create appliction
let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepo');

//use the express router object
let router = express.Router();
//let pies = pieRepo.get();
//create get to return a list of all pies
router.get('/', function (req, res, next){
    pieRepo.get(function(data){
        res.status(206).json({
            "status": 200,
            "statusText": "OK",
            "message": "all pies retrived",
            "data": data
        });
    },function(err){
        next(err);
    });
});

//configure router so all routes are prefixed wiht /api/v1
app.use('/api/', router);

//create server to listen on port 5000
var server = app.listen(5000, function(){
    console.log('Node server is running on localhost 5000');
});