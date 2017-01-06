import actionTypes from './types';

export const startGame = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GAME_STARTED
    })
  }
};