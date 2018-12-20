import actionTypes from "./types";
import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.AWS_BASEBALL_API,
  timeout: 5000
});

export const startNewGame = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.START_NEW_BASEBALL_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.START_NEW_BASEBALL_SUCCEEDED,
        gameId: resp.data.id
      });
    const error = err =>
      dispatch({
        type: actionTypes.START_NEW_BASEBALL_FAILED,
        error: err.response
      });
    axiosInstance
      .get("baseball/new-game", {
        responseType: "json"
      })
      .then(success, error);
  };
};

export const joinCurrentGame = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.JOIN_CURRENT_BASEBALL_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.JOIN_CURRENT_BASEBALL_SUCCEEDED,
        gameId: resp.data.id
      });
    const error = err =>
      dispatch({
        type: actionTypes.JOIN_CURRENT_BASEBALL_FAILED,
        error: err.response
      });
    axiosInstance
      .get(`baseball/current/game-state`, {
        responseType: "json"
      })
      .then(success, error);
  };
};

export const getGameConfigurationById = id => {
  return dispatch => {
    dispatch({
      type: actionTypes.BASEBALL_CONFIG_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.BASEBALL_CONFIG_SUCCEEDED,
        gameConfig: resp.data
      });
    const error = err =>
      dispatch({
        type: actionTypes.BASEBALL_CONFIG_FAILED,
        error: err.response
      });
    axiosInstance
      .get(`baseball/${id}/game-state`, {
        responseType: "json"
      })
      .then(success, error);
  };
};

const gameAction = (endpoint, event, undoMethod, messages) => {
  return dispatch => {
    dispatch({
      type: actionTypes.NEW_BASEBALL_EVENT_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.NEW_BASEBALL_EVENT_SUCCEEDED,
        eventSuccess: messages.success,
        gameEvent: event,
        undoMethod
      });
    const error = err =>
      dispatch({
        type: actionTypes.NEW_BASEBALL_EVENT_FAILED,
        eventError: messages.error
      });
    axiosInstance
      .get(endpoint, {
        responseType: "json"
      })
      .then(success, error);
  };
};

export const newStrike = gameId => {
  const messages = {
    success: "Strike thrown",
    error: "Strike failed"
  };
  return gameAction(
    `/baseball/${gameId}/strike`,
    "Strike",
    "undoStrike",
    messages
  );
};

export const newOut = gameId => {
  const messages = {
    success: "Batter Out",
    error: "Out failed"
  };
  return gameAction(`/baseball/${gameId}/out`, "Out", "undoOut", messages);
};

export const newSingle = gameId => {
  const messages = {
    success: "Single hit",
    error: "Single failed"
  };
  return gameAction(
    `/baseball/${gameId}/hit/1`,
    "Single",
    "undoSingle",
    messages
  );
};

export const newDouble = gameId => {
  const messages = {
    success: "Double hit",
    error: "Double failed"
  };
  return gameAction(
    `/baseball/${gameId}/hit/2`,
    "Double",
    "undoDouble",
    messages
  );
};

export const newTriple = gameId => {
  const messages = {
    success: "Triple hit",
    error: "Triple failed"
  };
  return gameAction(
    `/baseball/${gameId}/hit/3`,
    "Triple",
    "undoTriple",
    messages
  );
};

export const newHomeRun = gameId => {
  const messages = {
    success: "Home run hit",
    error: "Home Run failed"
  };
  return gameAction(
    `/baseball/${gameId}/hit/4`,
    "Home Run",
    "undoHomeRun",
    messages
  );
};

export const newSteal = gameId => {
  const messages = {
    success: "Base stolen",
    error: "Steal failed"
  };
  return gameAction(
    `/baseball/${gameId}/steal`,
    "Steal",
    "undoSteal",
    messages
  );
};

export const newPick = gameId => {
  const messages = {
    success: "Runner picked",
    error: "Pick failed"
  };
  return gameAction(`/baseball/${gameId}/pick`, "Pick", "undoPick", messages);
};

export const undoStrike = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.UNDO_STRIKE
    });
  };
};
