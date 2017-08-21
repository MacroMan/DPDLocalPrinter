// Libraries
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 4000});
var fs = require('fs');
var exec = require('child_process').exec;

// Globals
var file = process.env.TEMP + "\\LABEL.PRN";

// WebSocket server
wss.on('connection', function (ws) {
	ws.on('message', function (data) {
		// Write any data recieved to file
		fs.writeFile(file, data, function (err) {
			if (err) {
				return console.log("Error saving data to file");
			} else {
				// And copy the data to the printer
				exec("COPY /B " + file + " \\%COMPUTERNAME%\CITIZEN");
			}
		});
	});
});
