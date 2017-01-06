import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import game from './gameReducer';

const rootReducer = combineReducers({
  game,
  routing: routerReducer
});

export default rootReducer;