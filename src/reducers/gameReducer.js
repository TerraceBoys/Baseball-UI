import actionTypes from '../actions/types';

const initialState = {
  test: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST_ACTION:
      return {...state, test: state.test + 1};
    default:
      return state;
  }
};
