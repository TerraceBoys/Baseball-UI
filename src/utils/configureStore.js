import rootReducer from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware, compose} from 'redux';

export default (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory)))
  );
};