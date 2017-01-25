import actionTypes from '../actions/types';
import requestStatusTypes from '../utils/requestStatusTypes';

const initialState = {
  launchMBTARequestStatus: requestStatusTypes.UNINITIALIZED,
  launchBaseballRequestStatus: requestStatusTypes.UNINITIALIZED
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LAUNCH_MBTA_REQUESTED:
      return {
        ...state,
        launchMBTARequestStatus: requestStatusTypes.PENDING
      };
    case actionTypes.LAUNCH_MBTA_SUCCEEDED:
      return {
        ...state,
        launchMBTARequestStatus: requestStatusTypes.SUCCEEDED
      };
    case actionTypes.LAUNCH_MBTA_FAILED:
      return {
        ...state,
        launchMBTARequestStatus: requestStatusTypes.FAILED
      };
    case actionTypes.LAUNCH_BASEBALL_REQUESTED:
      return {
        ...state,
        launchBaseballRequestStatus: requestStatusTypes.PENDING
      };
    case actionTypes.LAUNCH_BASEBALL_SUCCEEDED:
      return {
        ...state,
        launchBaseballRequestStatus: requestStatusTypes.SUCCEEDED
      };
    case actionTypes.LAUNCH_BASEBALL_FAILED:
      return {
        ...state,
        launchBaseballRequestStatus: requestStatusTypes.FAILED
      };
    default:
      return state;
  }
};
