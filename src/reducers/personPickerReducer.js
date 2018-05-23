import actionTypes from '../actions/types';
import requestStatusTypes from '../utils/requestStatusTypes';

const initialState = {
  pickPersonRequestStatus: requestStatusTypes.UNINITIALIZED,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PICK_PERSON_REQUESTED:
      return {
        ...state,
        pickPersonRequestStatus: requestStatusTypes.PENDING,
      };
    case actionTypes.PICK_PERSON_SUCCEEDED:
      return {
        ...state,
        pickPersonRequestStatus: requestStatusTypes.SUCCEEDED,
      };
    case actionTypes.PICK_PERSON_FAILED:
      return {
        ...state,
        pickPersonRequestStatus: requestStatusTypes.FAILED,
      };
    default:
      return state;
  }
};
