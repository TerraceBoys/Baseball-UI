import actionTypes from "../actions/types";

const initialState = {
  currentlyPlaying: null,
  playlistSongs: null,
  searchSongs: null
};

// [
//   { id: 1, name: "fight it", artist: "mr popular" },
//   { id: 2, name: "I'm Evil", artist: "Tep No" },
//   { id: 3, name: "Ikuyo", artist: "KYLE" },
//   { id: 4, name: "Man Down", artist: "Shakka" },
//   { id: 5, name: "beat it", artist: "Michael Jackson" }
// ]

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENTLY_PLAYING_SUCCEEDED:
      return {
        ...state,
        currentlyPlaying: action.song
      };
    case actionTypes.FETCH_PLAYLIST_SONGS_SUCCEEDED:
      return {
        ...state,
        playlistSongs: action.songs
      };
    case actionTypes.FETCH_SEARCH_SONGS_SUCCEEDED:
      return {
        ...state,
        searchSongs: action.songs
      };
    default:
      return state;
  }
};
