import actionTypes from "./types";
import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.AWS_SPOTIFY_API,
  timeout: 5000
});

export const fetchCurrentlyPlaying = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_CURRENTLY_PLAYING_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.FETCH_CURRENTLY_PLAYING_SUCCEEDED,
        song: resp.data
      });
    const error = err =>
      dispatch({
        type: actionTypes.FETCH_CURRENTLY_PLAYING_FAILED
      });
    axiosInstance.get("/playing").then(success, error);
  };
};

export const fetchPlaylistSongs = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_PLAYLIST_SONGS_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.FETCH_PLAYLIST_SONGS_SUCCEEDED,
        songs: resp.data
      });
    const error = err =>
      dispatch({
        type: actionTypes.FETCH_PLAYLIST_SONGS_FAILED
      });
    axiosInstance.get("/playlist").then(success, error);
  };
};

export const fetchSearchSongs = searchString => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_SEARCH_SONGS_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.FETCH_SEARCH_SONGS_SUCCEEDED,
        songs: resp.data
      });
    const error = err =>
      dispatch({
        type: actionTypes.FETCH_SEARCH_SONGS_FAILED
      });
    axiosInstance.get(`/search?term=${searchString}`).then(success, error);
  };
};

export const addSongToQueue = songId => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_SONG_REQUESTED
    });
    const success = resp =>
      dispatch({
        type: actionTypes.ADD_SONG_SUCCEEDED
      });
    const error = err =>
      dispatch({
        type: actionTypes.ADD_SONG_FAILED
      });
    axiosInstance.post("/add", { id: songId }).then(success, error);
  };
};
