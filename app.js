// JavaScript Document// JavaScript Document
var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
									  
	  fs.readFile("./index.html",function(error,data){
										  
						res.writeHead(200,{"content-type":"text/html"});
						res.end(data,"utf-8");
										  
										  });								  
									  
									  
		}).listen(3000);

console.log("server running ");

var io=require("socket.io").listen(server);

io.sockets.on("connection",function(socket){
									
	console.log("user connected");
	
	socket.on("disconnect",function(){
				console.log("user disconnected");					
									});
									
									
	});
