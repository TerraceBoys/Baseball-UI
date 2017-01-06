import gameReducer from '../reducers/gameReducer';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

export default (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    gameReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
};