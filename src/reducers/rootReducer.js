import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import piControl from './piControlReducer';
import personPicker from './personPickerReducer';
import baseball from './baseballReducer';
import spotify from './spotifyReducer';

const rootReducer = combineReducers({
  piControl,
  baseball,
  personPicker,
  spotify,
  routing: routerReducer,
});

export default rootReducer;
