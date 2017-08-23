var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
	name: 'DPD Local label print adapter',
	description: 'Provides a WebSocket service on localhost:4000 that will forward any data sent to it directly to the Citizen label printer',
	script: 'C:\\Program Files\\DPDLocalPrinter\\citizen.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
	console.log("Installed");
	svc.start();
});

svc.install();
