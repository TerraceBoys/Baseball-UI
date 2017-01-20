import actionTypes from './types';
import axios from 'axios';


var axiosInstance = axios.create({
  baseURL: API,
  timeout: 5000
});

export const startNewGame = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.START_NEW_GAME_REQUESTED
    });
    axiosInstance.get('/new-game', {
        responseType: 'text'
      })
      .then(response => {
        dispatch({
          type: actionTypes.START_NEW_GAME_SUCCEEDED,
          newGameId: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.START_NEW_GAME_FAILED,
          error: error.response
        });
      });
  }
};


export const getGameConfiguration = (id) => { // TODO use the ID instead of 'current'
  return (dispatch) => {
    dispatch({
      type: actionTypes.GAME_CONFIG_REQUESTED
    });
    axiosInstance.get(`/game-state/current`, {
        responseType: 'json'
      })
      .then(response => {
        dispatch({
          type: actionTypes.GAME_CONFIG_SUCCEEDED,
          gameConfig: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GAME_CONFIG_FAILED,
          error: error.response
        });
      });
  }
};

export const newStrike = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_GAME_EVENT,
      gameEvent: 'Strike'
    })
  }
};

export const newOut = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_GAME_EVENT,
      gameEvent: 'Out'
    })
  }
};

export const newSingle = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_GAME_EVENT,
      gameEvent: 'Single'
    })
  }
};

export const newDouble = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_GAME_EVENT,
      gameEvent: 'Double'
    })
  }
};

export const newTriple = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_GAME_EVENT,
      gameEvent: 'Triple'
    })
  }
};

export const newHomeRun = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_GAME_EVENT,
      gameEvent: 'Home Run'
    })
  }
};

export const newSteal = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_GAME_EVENT,
      gameEvent: 'Steal'
    })
  }
};

export const newThrownOut = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_GAME_EVENT,
      gameEvent: 'Thrown Out'
    })
  }
};