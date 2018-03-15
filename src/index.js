import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
