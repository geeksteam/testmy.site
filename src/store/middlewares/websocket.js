const middleware = store => next => action => {
    if (action.type === "SEND_REQUEST") {
        next({type: "CHANGE_STATUS", payload: "loading"});
        console.log('sending request');
        var socket = new WebSocket("wss://serverpanel.cloud/testmysite");
        // if (!socket) console.log('cannot open socket');
        // else console.log(socket);
        socket.onopen = () => {
            console.log('connection established');
            socket.send(JSON.stringify(action.payload));
        }
        socket.onmessage = (e) => {
            console.log('response', JSON.parse(e.data));
            next({type: "ADD_RESPONSE", payload: JSON.parse(e.data)});
        }
    }
    // return {type: "CHANGE_STATUS", payload: "loading"};
}

export default middleware;
