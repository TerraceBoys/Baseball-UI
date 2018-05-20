import actionTypes from '../actions/types';
import {
  FAILED,
  PENDING,
  SUCCEEDED,
  UNINITIALIZED,
} from '../utils/requestStatusTypes';

const initialState = {
  pickPersonRequestStatus: UNINITIALIZED,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PICK_PERSON_REQUESTED:
      return {
        ...state,
        pickPersonRequestStatus: PENDING,
      };
    case actionTypes.PICK_PERSON_SUCCEEDED:
      return {
        ...state,
        pickPersonRequestStatus: SUCCEEDED,
      };
    case actionTypes.PICK_PERSON_FAILED:
      return {
        ...state,
        pickPersonRequestStatus: FAILED,
      };
    default:
      return state;
  }
};
