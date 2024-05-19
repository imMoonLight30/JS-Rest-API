//bring in the espress server and create appliction
let express = require('express');
let app = express();

//use the express router object
let router = express.Router();
let pies = [
    {"id":1, "name": "apple"},
    {"id":2, "name": "Cherry"},
    {"id":3, "name": "Peach"},
];
//create get to return a list of all pies
router.get('/', function (req, res, next){
    res.status(206).send(pies);
});

//configure router so all routes are prefixed wiht /api/v1
app.use('/api/', router);

//create server to listen on port 5000
var server = app.listen(5000, function(){
    console.log('Node server is running on localhost 5000');
});