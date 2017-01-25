import actionTypes from './types';
import axios from 'axios';
import {AWS_API} from '../config';

let axiosInstance = axios.create({
  baseURL: AWS_API,
  timeout: 5000
});

export const startNewGame = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.START_NEW_BASEBALL_REQUESTED
    });
    axiosInstance.get('baseball/new-game', {
        responseType: 'json'
      })
      .then(response => {
        dispatch({
          type: actionTypes.START_NEW_BASEBALL_SUCCEEDED,
          gameId: response.data.id
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.START_NEW_BASEBALL_FAILED,
          error: error.response
        });
      });
  }
};

export const joinCurrentGame = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.JOIN_CURRENT_BASEBALL_REQUESTED
    });
    axiosInstance.get(`baseball/current/game-state`, {
        responseType: 'json'
      })
      .then(response => {
        dispatch({
          type: actionTypes.JOIN_CURRENT_BASEBALL_SUCCEEDED,
          gameId: response.data.id
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.JOIN_CURRENT_BASEBALL_FAILED,
          error: error.response
        });
      });
  }
};

export const getGameConfigurationById = (id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.BASEBALL_CONFIG_REQUESTED
    });
    axiosInstance.get(`baseball/${id}/game-state`, {
        responseType: 'json'
      })
      .then(response => {
        dispatch({
          type: actionTypes.BASEBALL_CONFIG_SUCCEEDED,
          gameConfig: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.BASEBALL_CONFIG_FAILED,
          error: error.response
        });
      });
  }
};

const gameAction = (endpoint, event, messages) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.NEW_BASEBALL_EVENT_REQUESTED
    });
    axiosInstance.get(endpoint, {
        responseType: 'json'
      })
      .then(() => {
        dispatch({
          type: actionTypes.NEW_BASEBALL_EVENT_SUCCEEDED,
          eventSuccess: messages.success,
          gameEvent: event
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.NEW_BASEBALL_EVENT_FAILED,
          eventError: messages.error
        });
      });
  }
};

export const newStrike = (gameId) => {
  const messages = {
    success: 'Strike thrown',
    pending: 'Requesting Strike',
    error: 'Strike failed'
  };
  return gameAction(`/baseball/${gameId}/strike`, 'Strike', messages);
};

export const newOut = (gameId) => {
  const messages = {
    success: 'Batter Out',
    error: 'Out failed'
  };
  return gameAction(`/baseball/${gameId}/out`, 'Out', messages);
};

export const newSingle = (gameId) => {
  const messages = {
    success: 'Single hit',
    error: 'Single failed'
  };
  return gameAction(`/baseball/${gameId}/hit/1`, 'Single', messages);
};

export const newDouble = (gameId) => {
  const messages = {
    success: 'Double hit',
    error: 'Double failed'
  };
  return gameAction(`/baseball/${gameId}/hit/2`, 'Double', messages);
};

export const newTriple = (gameId) => {
  const messages = {
    success: 'Triple hit',
    error: 'Triple failed'
  };
  return gameAction(`/baseball/${gameId}/hit/3`, 'Triple', messages);
};

export const newHomeRun = (gameId) => {
  const messages = {
    success: 'Home run hit',
    error: 'Home Run failed'
  };
  return gameAction(`/baseball/${gameId}/hit/4`, 'Home Run', messages);
};

export const newSteal = (gameId) => {
  const messages = {
    success: 'Base stolen',
    error: 'Steal failed'
  };
  return gameAction(`/baseball/${gameId}/steal`, 'Steal', messages);
};

export const newPick = (gameId) => {
  const messages = {
    success: 'Runner picked',
    error: 'Pick failed'
  };
  return gameAction(`/baseball/${gameId}/pick`, 'Pick', messages);
};
