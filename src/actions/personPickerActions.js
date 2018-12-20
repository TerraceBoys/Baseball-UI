import actionTypes from "./types";
import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.AWS_MBTA_API,
  timeout: 5000
});

export const pickPerson = people => {
  return dispatch => {
    dispatch({
      type: actionTypes.PICK_PERSON_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.PICK_PERSON_SUCCEEDED
      });
    const error = err =>
      dispatch({
        type: actionTypes.PICK_PERSON_FAILED
      });
    axiosInstance.post("/pick", { people }).then(success, error);
  };
};
