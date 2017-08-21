var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
	name: 'Zeus print driver',
	description: 'Provides a WebSocket service on localhost that will forward any data sent to it directly to the Citizen label printer',
	script: 'C:\\Program Files\\Zeus\\citizen.js'
});

// Listen for the "uninstall" event, which indicates the
// process is no longer available as a service.
svc.on('uninstall', function () {
	console.log('Uninstall complete.');
	console.log('The service exists: ', svc.exists);
});

svc.uninstall();