var express = require('express'),
    app = express(),
    port = 8081,
    bodyParser = require('body-parser');
    
var todoRoutes = require("./routes/todos");

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
})
    
    