import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
// needed dependancies
// applyMiddleware from redux
import { applyMiddleware, createStore } from 'redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
import logger from 'redux-logger';
import rootReducer from './reducers';
import { charsReducer } from './reducers/starWarsReducer';


const store = createStore(charsReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);