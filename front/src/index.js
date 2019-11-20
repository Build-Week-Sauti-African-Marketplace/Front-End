import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { Provider } from "react-redux"
import { reducer } from "./reducers"
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer,applyMiddleware(thunk,logger))
ReactDOM.render(
  <Router>
<Provider store={store}>
<App />
</Provider>
</Router>, document.getElementById('root'));


