const middleware = store => next => action => {
	if (action.type === "SEND_REQUEST") {
		next({type: "CHANGE_STATUS", payload: "loading"});
		console.log('sending request');
		var socket = new WebSocket("wss://serverpanel.cloud/testmysite");
	   
		socket.onopen = () => {
			console.log('connection established');
			socket.send(JSON.stringify(action.payload));
		}
		socket.onmessage = (e) => {
			console.log('response', JSON.parse(e.data));
			next({type: "ADD_RESPONSE", payload: JSON.parse(e.data)});
		}
		socket.onclose = () => {
			console.log('connection closed');
			next({type: "CHANGE_STATUS", payload: "finished"});
		}
	}
}

export default middleware;
