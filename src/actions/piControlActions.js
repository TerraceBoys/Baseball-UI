import actionTypes from './types';
import axios from 'axios';
import {AWS_BASEBALL_API, AWS_MBTA_API} from '../config';

const axiosBaseballInstance = axios.create({
  baseURL: AWS_BASEBALL_API
});

const axiosMBTAInstance = axios.create({
  baseURL: AWS_MBTA_API
});

export const launchBaseball = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LAUNCH_BASEBALL_REQUESTED
    });
    axiosBaseballInstance.get('/baseball')
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
    axiosMBTAInstance.get('/mbta')
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
