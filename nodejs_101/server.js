//require is a built-in node js method that includes
//a module:
//1 part of a core, in which we do nothing (HTTP is an example)
//2 from the npm store, written by someone else, require will look linside of node_module
//3 a module we wrote, which requires a path 

var http = require("http");
//include the fs module; fs = file system. Part of core! yay!!
var fs = require("fs"); 

console.log(http);
var server = http.createServer(function(request, response){
	// console.log(request);
	response.writeHead(200, {
		'content-type': 'text/html'
	}); 
	response.write("<h1>Hello, visitor. This is YOUR node server.</h1")
	response.end(); 
}); 
//server is created above. It came from HTTP object, the createServer method
//it include a request and a reponse in the callback, but also has a listen method. 
var port = 8000; 
server.listen(8000); 
console.log("Nodejs is listening for connections on port 8000"); 