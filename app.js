// jshint esverion:6

const express = require("express");
const bodyParser = require("body-parser");

// Initialize Express
const app = express();

app.set("view engine",  "ejs");

app.get("/", function(req, res){

var today = new Date();
var currentDay = today.getDay();
var day = "";


if(currentDay == 1){
    day = "Monday";
}
else if(currentDay == 2){
    day = "Tuesday";
}
else if(currentDay == 3){
    day = "Wednesday";
}
else if(currentDay == 4){
    day = "Thursday";
}
else if(currentDay == 5){
    day = "Friday";
}
else {
    day = "Weekend";

}
    res.render("list", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server started on http://localhost:3000");
    
})