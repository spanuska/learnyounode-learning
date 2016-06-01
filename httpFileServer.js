// write an HTTP server that listens to the port number provided as a CL arg, and serves a text file, to which the path is provided as a CL arg

var fs = require('fs');
var http = require('http');
var port = Number(process.argv[2]);
var file = process.argv[3];

http.createServer(function (request, response) {
	response.writeHead(200, { 'content-type': 'text/plain' });
	fs.createReadStream(file).pipe(response);
}).listen(port);