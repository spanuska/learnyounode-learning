// write a TCP time server; listen to the port provided in the first CL arg; write the current date and time in "YYYY-MM-DD hh:mm" format followed by newline.

var net = require('net');
var strftime = require('strftime')
var port = Number(process.argv[2]);

var server = net.createServer(function (socket) {
	socket.end(strftime('%F %R\n'));;
});
server.on('error', console.error);
server.listen(port);