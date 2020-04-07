const express = require("express");
var app = express();
var counter = 0;

//Add counter function

function incrementCount(counter){
    setInterval(function(){//set increment in parantheses?

app.post('/increment', function(req, res){
    counter++;
    res.send
})

app.post('/decrement', function(req, res){
    counter--;
})

app.get('/get', function(req, res){

})

app.listen(3000,function(){
}