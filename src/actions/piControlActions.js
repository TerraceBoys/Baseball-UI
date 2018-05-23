import actionTypes from './types';
import axios from 'axios';
import { AWS_BASEBALL_API, AWS_MBTA_API } from '../config';

const axiosBaseballInstance = axios.create({
  baseURL: AWS_BASEBALL_API,
});

const axiosMBTAInstance = axios.create({
  baseURL: AWS_MBTA_API,
});

export const launchBaseball = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LAUNCH_BASEBALL_REQUESTED,
    });
    const success = resp =>
      dispatch({
        type: actionTypes.LAUNCH_BASEBALL_SUCCEEDED,
      });
    const error = err =>
      dispatch({
        type: actionTypes.LAUNCH_BASEBALL_FAILED,
      });
    axiosBaseballInstance.get('/baseball').then(success, error);
  };
};

export const launchMBTA = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LAUNCH_MBTA_REQUESTED,
    });
    const success = resp =>
      dispatch({
        type: actionTypes.LAUNCH_MBTA_SUCCEEDED,
      });
    const error = err =>
      dispatch({
        type: actionTypes.LAUNCH_MBTA_FAILED,
      });
    axiosMBTAInstance.get('/mbta').then(success, error);
  };
};

export const launchPersonPicker = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LAUNCH_PERSON_PICKER_REQUESTED,
    });
    const success = resp =>
      dispatch({
        type: actionTypes.LAUNCH_PERSON_PICKER_SUCCEEDED,
      });
    const error = err =>
      dispatch({
        type: actionTypes.LAUNCH_PERSON_PICKER_FAILED,
      });
    axiosMBTAInstance.get('/person-picker').then(success, error);
  };
};
