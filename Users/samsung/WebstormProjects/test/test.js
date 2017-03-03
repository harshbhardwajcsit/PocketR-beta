var express=require('express');
var app=express();
var bodyParser=require("body-parser");
//var timeout=require("connect-timeout");
//var db=require("./db");
var mongoose=require("mongoose");
var models=require("./models");
var player=require("./player");

app.use(express.static("public"));   //initializing a public middleware 
var module=require("./module");
/*
module.speak();*/
//getting student data

app.use(bodyParser.json());                         //parsing commands use for post data
app.use(bodyParser.urlencoded({extended:true}));

//app.get("/students",db.getStudents);
//app.get("/student",db.setStudent);
app.use(express.static("public"));
app.use("/player",player);

//regular expressions
/*

app.get("/abc",function(req,res){b
    res.send("hello");
})
*/
app.get("/",models.userSignup);
app.get("/usershow",models.getUsers);

app.listen(8080,function(){
    console.log("server started");})



 