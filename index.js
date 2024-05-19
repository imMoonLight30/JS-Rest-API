//bring in the espress server and create appliction
let express = require('express');
let app = express();

//use the express router object
let router = express.Router();

//create get to return a list of all pies
router.get('/', function (req, res, next){
    res.send("apple");
});

//configure router so all routes are prefixed wiht /api/v1
app.use('/api/', router);

//create server to listen on port 5000
var server = app.listen(5000, function(){
    console.log('Node server is running on localhost 5000');
});