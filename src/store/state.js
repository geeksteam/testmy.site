import { createStore, combineReducers, applyMiddleware } from "redux";
import wsMiddleware from "./middlewares/websocket";
import * as reducers from "./reducers";

const reducer = combineReducers(reducers);

let createStoreWithMiddleWare = applyMiddleware(wsMiddleware)(createStore);

const store = createStoreWithMiddleWare(reducer, {
    responses: []
});


export default store;