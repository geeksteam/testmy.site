import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/state";

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import App from './components/App/App';
import './index.css';

store.subscribe(() => console.log('new state', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
