import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import piControl from './piControlReducer';
import baseball from './baseballReducer';

const rootReducer = combineReducers({
  piControl,
  baseball,
  routing: routerReducer
});

export default rootReducer;