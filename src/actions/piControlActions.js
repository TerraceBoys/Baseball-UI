import actionTypes from './types';
import axios from 'axios';
import {PI_API} from '../config';

let axiosInstance = axios.create({
  baseURL: PI_API
});

export const launchBaseball = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LAUNCH_BASEBALL_REQUESTED
    });
    axiosInstance.get('/baseball')
      .then(() => {
        dispatch({
          type: actionTypes.LAUNCH_BASEBALL_SUCCEEDED
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.LAUNCH_BASEBALL_FAILED
        });
      });
  }
};

export const launchMBTA = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LAUNCH_MBTA_REQUESTED
    });
    axiosInstance.get('/mbta')
      .then(() => {
        dispatch({
          type: actionTypes.LAUNCH_MBTA_SUCCEEDED
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.LAUNCH_MBTA_FAILED
        });
      });
  }
};

export const launchPersonPicker = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LAUNCH_PERSON_PICKER_REQUESTED
    });
  }
};
