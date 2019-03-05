var Service = require('node-windows').Service;

var method = process.argv[2];
if (method != 'install' && method != 'uninstall') {
	console.log("Argument is missing. Usage:\nnode install.js [install|uninstall]");
	process.exit();
}

// Create a new service object
var svc = new Service({
	name: 'DPD Local label print adapter',
	description: 'Provides a WebSocket service on localhost:4000 that will forward any data sent to it directly to the Citizen label printer',
	script: __dirname + '\\citizen.js'
});

svc.on('install', function () {
	console.log("DPD Label Printer Installed");
	svc.start();
});

svc.on('uninstall', function () {
	console.log("DPD Label Printer Uninstalled");
});

if (method == 'install') {
	svc.install();
} else {
	svc.uninstall();
}
