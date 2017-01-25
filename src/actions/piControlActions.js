import actionTypes from './types';
import axios from 'axios';
import {PI_API} from '../config';

let axiosInstance = axios.create({
  baseURL: PI_API
});


export const launchBaseball = () => {
  return (dispatch) => {
    axiosInstance.get('/baseball');
  }
};

export const launchDefaultDisplay = () => {
  return (dispatch) => {
    axiosInstance.get('/mbta');
  }
};
