import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import piControl from './piControlReducer';
import personPicker from './personPickerReducer';
import baseball from './baseballReducer';

const rootReducer = combineReducers({
  piControl,
  baseball,
  personPicker,
  routing: routerReducer,
});

export default rootReducer;
