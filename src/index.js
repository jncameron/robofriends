import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import tachyons from 'tachyons';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({searchRobots, requestRobots})

const store = 
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
