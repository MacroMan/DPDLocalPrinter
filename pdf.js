// Libraries
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 4001});
var fs = require('fs');
var exec = require('child_process').exec;

// Globals
var file = process.env.TEMP + "\\DOC.DPF";
//var file = "/tmp/doc.pdf";
//console.log(file);

// WebSocket server
wss.on('connection', function (ws) {
	ws.on('message', function (data) {
		var decoded = Buffer.from(data, 'base64');
		// Write any data recieved to file
		fs.writeFile(file, decoded, function (err) {
			if (err) {
				return console.log("Error saving data to file");
			} else {
				// And copy the data to the printer
				//console.log(data);
				exec("SumatraPDF.exe -print-to \\\\%COMPUTERNAME%\\PDF " + file);
			}
		});
	});
});