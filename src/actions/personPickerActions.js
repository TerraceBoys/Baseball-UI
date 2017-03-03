import actionTypes from './types';
import axios from 'axios';
import {AWS_MBTA_API} from '../config';

const axiosInstance = axios.create({
  baseURL: AWS_MBTA_API,
  timeout: 5000
});

export const pickPerson = (people) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.PICK_PERSON_REQUESTED
    });
    axiosInstance.post('/pick', {people})
      .then(() => {
        dispatch({
          type: actionTypes.PICK_PERSON_SUCCEEDED
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.PICK_PERSON_FAILED
        });
      });
  }
};
