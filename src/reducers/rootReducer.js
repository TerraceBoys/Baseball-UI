import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import baseball from './baseballReducer';

const rootReducer = combineReducers({
  baseball,
  routing: routerReducer
});

export default rootReducer;