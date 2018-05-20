import { Map, Stack } from 'immutable';
import actionTypes from '../actions/types';
import {
  FAILED,
  PENDING,
  SUCCEEDED,
  UNINITIALIZED,
} from '../utils/requestStatusTypes';

const initialState = {
  beginGameId: null,
  startNewGameRequestStatus: UNINITIALIZED,
  joinCurrentGameRequestStatus: UNINITIALIZED,
  gameConfigRequestStatus: UNINITIALIZED,
  gameConfig: new Map(),
  gameEventStack: new Stack([
    { name: 'strike', undoMethod: 'undoStrike' },
    { name: 'home run' },
    { name: 'triple' },
    { name: 'steal' },
  ]),
  gameEventMessage: 'No game events',
  gameEventRequestStatus: UNINITIALIZED,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_NEW_BASEBALL_REQUESTED:
      return {
        ...state,
        startNewGameRequestStatus: PENDING,
      };
    case actionTypes.START_NEW_BASEBALL_SUCCEEDED:
      return {
        ...state,
        beginGameId: action.gameId,
        gameEventStack: new Stack(),
        startNewGameRequestStatus: SUCCEEDED,
      };
    case actionTypes.START_NEW_BASEBALL_FAILED:
      return {
        ...state,
        startNewGameRequestStatus: FAILED,
      };
    case actionTypes.JOIN_CURRENT_BASEBALL_REQUESTED:
      return {
        ...state,
        joinCurrentGameRequestStatus: PENDING,
      };
    case actionTypes.JOIN_CURRENT_BASEBALL_SUCCEEDED:
      return {
        ...state,
        beginGameId: action.gameId,
        joinCurrentGameRequestStatus: SUCCEEDED,
      };
    case actionTypes.JOIN_CURRENT_BASEBALL_FAILED:
      return {
        ...state,
        joinCurrentGameRequestStatus: FAILED,
      };
    case actionTypes.BASEBALL_CONFIG_REQUESTED:
      return {
        ...state,
        gameConfigRequestStatus: PENDING,
      };
    case actionTypes.BASEBALL_CONFIG_SUCCEEDED:
      return {
        ...state,
        gameConfig: action.gameConfig,
        gameConfigRequestStatus: SUCCEEDED,
      };
    case actionTypes.BASEBALL_CONFIG_FAILED:
      return {
        ...state,
        gameConfigError: action.error,
        gameConfigRequestStatus: FAILED,
      };
    case actionTypes.NEW_BASEBALL_EVENT_REQUESTED:
      return {
        ...state,
        gameEventMessage: '',
        gameEventRequestStatus: PENDING,
      };
    case actionTypes.NEW_BASEBALL_EVENT_SUCCEEDED:
      return {
        ...state,
        gameEventStack: state.gameEventStack.push({
          name: action.gameEvent,
          undoMethod: action.undoMethod,
        }),
        gameEventMessage: action.eventSuccess,
        gameEventRequestStatus: SUCCEEDED,
      };
    case actionTypes.NEW_BASEBALL_EVENT_FAILED:
      return {
        ...state,
        gameEventMessage: action.eventError,
        gameEventRequestStatus: FAILED,
      };
    default:
      return state;
  }
};
