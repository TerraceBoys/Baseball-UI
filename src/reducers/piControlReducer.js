import actionTypes from '../actions/types';
import {
  FAILED,
  PENDING,
  SUCCEEDED,
  UNINITIALIZED,
} from '../utils/requestStatusTypes';

const initialState = {
  launchMBTARequestStatus: UNINITIALIZED,
  launchBaseballRequestStatus: UNINITIALIZED,
  launchPersonPickerRequestStatus: UNINITIALIZED,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LAUNCH_MBTA_REQUESTED:
      return {
        ...state,
        launchMBTARequestStatus: PENDING,
      };
    case actionTypes.LAUNCH_MBTA_SUCCEEDED:
      return {
        ...state,
        launchMBTARequestStatus: SUCCEEDED,
      };
    case actionTypes.LAUNCH_MBTA_FAILED:
      return {
        ...state,
        launchMBTARequestStatus: FAILED,
      };
    case actionTypes.LAUNCH_BASEBALL_REQUESTED:
      return {
        ...state,
        launchBaseballRequestStatus: PENDING,
      };
    case actionTypes.LAUNCH_BASEBALL_SUCCEEDED:
      return {
        ...state,
        launchBaseballRequestStatus: SUCCEEDED,
      };
    case actionTypes.LAUNCH_BASEBALL_FAILED:
      return {
        ...state,
        launchBaseballRequestStatus: FAILED,
      };
    case actionTypes.LAUNCH_PERSON_PICKER_REQUESTED:
      return {
        ...state,
        launchPersonPickerRequestStatus: PENDING,
      };
    case actionTypes.LAUNCH_PERSON_PICKER_SUCCEEDED:
      return {
        ...state,
        launchPersonPickerRequestStatus: SUCCEEDED,
      };
    case actionTypes.LAUNCH_PERSON_PICKER_FAILED:
      return {
        ...state,
        launchPersonPickerRequestStatus: FAILED,
      };
    default:
      return state;
  }
};
