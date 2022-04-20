import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { applyMiddleware, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk'
import App from './App';
import './index.css';
import reducer from './state/reducer';

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
