var express = require ('express');
var app = express();

var bodyParser = require ('body-Parser')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));


app.listen(3000, function(){
    console.log("Server is booted");
});