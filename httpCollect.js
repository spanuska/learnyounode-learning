// take a url as a CL arg, perform GET request, log the contents of all data from the server, print # of characters received, then the complete string received

var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(response) {
	response.pipe(bl(function (err, data) {
		if (err) return console.error(err);
		
		console.log(data.toString().length);
		console.log(data.toString());
	}));
}).on('error', console.error);