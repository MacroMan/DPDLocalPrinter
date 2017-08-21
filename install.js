var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
	name: 'Zeus print driver',
	description: 'Provides a WebSocket service on localhost that will forward any data sent to it directly to the Citizen label printer',
	script: 'C:\\Program Files\\Zeus\\citizen.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
	console.log("Installed");
	svc.start();
});

svc.install();
