import actionTypes from "../actions/types";

const FAKE_SONGS = [
  { id: 1, name: "fight it", artist: "mr popular" },
  { id: 2, name: "I'm Evil", artist: "Tep No" },
  { id: 3, name: "Ikuyo", artist: "KYLE" },
  { id: 4, name: "Man Down", artist: "Shakka" },
  { id: 5, name: "beat it", artist: "Michael Jackson" },
  { id: 6, name: "Intoxicated", artist: "Martin Solveig" },
  { id: 7, name: "The Real Slim Shady", artist: "Eminem" },
  { id: 8, name: "Rockin'", artist: "The Weekend" },
  { id: 8, name: "Some song with a really long name", artist: "Someone" }
];

const initialState = {
  currentlyPlaying: { id: 1, name: "fight it", artist: "mr popular" },
  playlistSongs: FAKE_SONGS,
  searchSongs: FAKE_SONGS
};

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
