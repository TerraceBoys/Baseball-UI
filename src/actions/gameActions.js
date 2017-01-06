import actionTypes from './types';

export const testAction = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.TEST_ACTION
    })
  }
};