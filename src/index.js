import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './utils/configureStore';
import './styles/index.css';
import 'font-awesome/css/font-awesome.css'
import Routes from './Routes';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store} >
    <Routes history={history} />
  </Provider>,
  document.getElementById('root')
);
