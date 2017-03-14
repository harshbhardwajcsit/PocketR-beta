
var express=require("express");
var socket=require("socket.io");  //socket module
var http=require("http");  //http module


var app=express();
var Server=http.Server(app);  //mount server on our app
var io=socket(Server);  //io is a socket created

app.use(express.static(__dirname + '/public'));


app.get("/chat",function(req,res){
    res.send("hello");
})
io.on("connection",function(socket1) {

  // socket1.emit('data','youstart');
    console.log("connected");

//parsing chat data
    socket1.on('chat',function(data){
        console.log(data);
        sendChat(socket1,data);
    });

    //socket1.on('news',function(data){
        //console.log(data);})


})



var sendChat=function(socket1,data){
    socket1.emit('sendChat',data);
}



var port=process.env.PORT || 3000;

Server.listen(port,function(req,res){

    console.log("server started ");})
