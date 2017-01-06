import actionTypes from '../actions/types';

const initialState = {
  gameStarted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_STARTED:
      return {...state, gameStarted: true};
    default:
      return state;
  }
};
