//import modules

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

const route = require('./routes/route');

//Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/todoList');

//On Connection
mongoose.connection.on('connected', function(){
    console.log('Connected to the database @27017');
});

mongoose.connection.on('error', function(err){
    if(err){
        console.log('Error in database connection: '+err);
    }
    
});

//port no
const port = 3000;

//Adding middleware-cors
app.use(cors());

//body-parser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//Testing server
app.get('/', function(req,res){
    res.send("Hii..........");
});

app.listen(port, function(){
    console.log("Server started at port "+port);
});