import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./state";

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import App from './App';
import './index.css';

store.subscribe(() => console.log('new state', store.getState()));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
