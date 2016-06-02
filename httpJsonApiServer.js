// write a server that serves JSON data when it receives a get request to the path 'api/parsetime' with a query string w/ key iso and iso-format time as the value; JSON response should contin 'hour', 'minute', and 'second' keys
// second endpoint is 'api/unixtime', which has the same query string, but should return UNIX time in a JSON object with a 'unixtime' key
// port provided in the CL

var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var responseData;
  
  // handle errors
  request.on('error', function (error) {
    response.statusCode = 400;
    response.end()
    return console.error(err.stack);
  });
  response.on('error', console.error);
  if (request.method !== 'GET') {
    response.statusCode = 400;
    return response.end('Can only accept GET requests\n');
  }

  response.writeHead(200, { 'content-type': 'application/json' });

  if (parsedUrl.pathname === '/api/parsetime' && parsedUrl.search !== '') {
    var queriedDateTime = new Date(parsedUrl.query.iso);
    responseData = {
      'hour': queriedDateTime.getHours(),
      'minute': queriedDateTime.getMinutes(),
      'second': queriedDateTime.getSeconds()
    };
  } else if (parsedUrl.pathname === '/api/unixtime' && parsedUrl.search !== '') {
    responseData = { 'unixtime': Date.parse(parsedUrl.query.iso) };
  } else {
    response.writeHead(400, { 'content-type': 'text/plain'} )
    return response.end('Something is not quite right with your request. Check your query and try again.')  
  }

  response.end(JSON.stringify(responseData));
}).listen(port);