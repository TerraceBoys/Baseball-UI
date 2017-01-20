import {Map, Stack} from 'immutable';
import actionTypes from '../actions/types';
import requestStatusTypes from '../utils/requestStatusTypes';

const initialState = {
  startNewGameRequestStatus: requestStatusTypes.UNINITIALIZED,
  gameConfigRequestStatus: requestStatusTypes.UNINITIALIZED,
  gameConfig: new Map(),
  gameEventStack: new Stack()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_NEW_GAME_REQUESTED:
      return {
        ...state,
        startNewGameRequestStatus: requestStatusTypes.PENDING
      };
    case actionTypes.START_NEW_GAME_SUCCEEDED:
      return {
        ...state,
        newGameId: action.newGameId,
        startNewGameRequestStatus: requestStatusTypes.SUCCEEDED
      };
    case actionTypes.START_NEW_GAME_FAILED:
      return {
        ...state,
        startNewGameError: action.error,
        startNewGameRequestStatus: requestStatusTypes.FAILED
      };
    case actionTypes.GAME_CONFIG_REQUESTED:
      return {
        ...state,
        gameConfigRequestStatus: requestStatusTypes.PENDING
      };
    case actionTypes.GAME_CONFIG_SUCCEEDED:
      return {
        ...state,
        gameConfig: action.gameConfig,
        gameConfigRequestStatus: requestStatusTypes.SUCCEEDED
      };
    case actionTypes.GAME_CONFIG_FAILED:
      return {
        ...state,
        gameConfigError: action.error,
        gameConfigRequestStatus: requestStatusTypes.FAILED
      };
    case actionTypes.NEW_GAME_EVENT:
      return {
        ...state,
        gameEventStack: state.gameEventStack.push(action.gameEvent)
      };
    default:
      return state;
  }
};
