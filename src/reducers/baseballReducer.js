import { Map, Stack } from 'immutable';
import actionTypes from '../actions/types';
import requestStatusTypes from '../utils/requestStatusTypes';

const initialState = {
  beginGameId: null,
  startNewGameRequestStatus: requestStatusTypes.UNINITIALIZED,
  joinCurrentGameRequestStatus: requestStatusTypes.UNINITIALIZED,
  gameConfigRequestStatus: requestStatusTypes.UNINITIALIZED,
  gameConfig: new Map(),
  gameEventStack: new Stack([
    { name: 'strike', undoMethod: 'undoStrike' },
    { name: 'home run' },
    { name: 'triple' },
    { name: 'steal' },
  ]),
  gameEventMessage: 'No game events',
  gameEventRequestStatus: requestStatusTypes.UNINITIALIZED,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_NEW_BASEBALL_REQUESTED:
      return {
        ...state,
        startNewGameRequestStatus: requestStatusTypes.PENDING,
      };
    case actionTypes.START_NEW_BASEBALL_SUCCEEDED:
      return {
        ...state,
        beginGameId: action.gameId,
        gameEventStack: new Stack(),
        startNewGameRequestStatus: requestStatusTypes.SUCCEEDED,
      };
    case actionTypes.START_NEW_BASEBALL_FAILED:
      return {
        ...state,
        startNewGameRequestStatus: requestStatusTypes.FAILED,
      };
    case actionTypes.JOIN_CURRENT_BASEBALL_REQUESTED:
      return {
        ...state,
        joinCurrentGameRequestStatus: requestStatusTypes.PENDING,
      };
    case actionTypes.JOIN_CURRENT_BASEBALL_SUCCEEDED:
      return {
        ...state,
        beginGameId: action.gameId,
        joinCurrentGameRequestStatus: requestStatusTypes.SUCCEEDED,
      };
    case actionTypes.JOIN_CURRENT_BASEBALL_FAILED:
      return {
        ...state,
        joinCurrentGameRequestStatus: requestStatusTypes.FAILED,
      };
    case actionTypes.BASEBALL_CONFIG_REQUESTED:
      return {
        ...state,
        gameConfigRequestStatus: requestStatusTypes.PENDING,
      };
    case actionTypes.BASEBALL_CONFIG_SUCCEEDED:
      return {
        ...state,
        gameConfig: action.gameConfig,
        gameConfigRequestStatus: requestStatusTypes.SUCCEEDED,
      };
    case actionTypes.BASEBALL_CONFIG_FAILED:
      return {
        ...state,
        gameConfigError: action.error,
        gameConfigRequestStatus: requestStatusTypes.FAILED,
      };
    case actionTypes.NEW_BASEBALL_EVENT_REQUESTED:
      return {
        ...state,
        gameEventMessage: '',
        gameEventRequestStatus: requestStatusTypes.PENDING,
      };
    case actionTypes.NEW_BASEBALL_EVENT_SUCCEEDED:
      return {
        ...state,
        gameEventStack: state.gameEventStack.push({
          name: action.gameEvent,
          undoMethod: action.undoMethod,
        }),
        gameEventMessage: action.eventSuccess,
        gameEventRequestStatus: requestStatusTypes.SUCCEEDED,
      };
    case actionTypes.NEW_BASEBALL_EVENT_FAILED:
      return {
        ...state,
        gameEventMessage: action.eventError,
        gameEventRequestStatus: requestStatusTypes.FAILED,
      };
    default:
      return state;
  }
};
