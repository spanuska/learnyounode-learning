// create an HTTP server that receives only POST requests and converts the request characters to uppercase then returns it to the client, listens on port provided as CL arg

var http = require('http');
var map = require('through2-map');
var port = Number(process.argv[2]);

http.createServer(function (request, response) {
  request.on('error', function (error) {
    response.statusCode = 400;
    response.end()
    return console.error(err.stack);
  });
  response.on('error', function (error) {
    return console.error(err.stack);
  })

  if (request.method !== 'POST') {
    response.statusCode = 404;
    return response.end('Can only accept POST requests\n')
  }

  response.writeHead(200, { 'content-type': 'text/plain' });
  request.pipe(map(function (data) {
    return data.toString().toUpperCase();
  })).pipe(response);
}).listen(port);