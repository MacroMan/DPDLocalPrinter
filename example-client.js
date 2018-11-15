function printLabel(prn_data) {
	var ws = new WebSocket("ws://localhost:4000");

	ws.onopen = function() {
		ws.send(prn_data);
	};

	ws.onerror = function() {
		alert("Can't print! Unable to find local print server!");
	};
}