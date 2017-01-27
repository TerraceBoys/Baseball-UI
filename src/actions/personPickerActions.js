import actionTypes from './types';
import axios from 'axios';
import {AWS_PERSON_PICKER_API} from '../config';

const axiosPersonPickerInstance = axios.create({
  baseURL: AWS_PERSON_PICKER_API,
  timeout: 5000
});

export const pickPerson = (people) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.PICK_PERSON_REQUESTED
    });
    axiosPersonPickerInstance.post('/pick', {people})
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