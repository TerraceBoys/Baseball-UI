export const getSpotify = state => state.spotify;

export const getSpotifyCurrentlyPlaying = state => {
  const spotify = getSpotify(state);
  if (spotify) {
    return spotify.currentlyPlaying;
  }
  return null;
};

export const getSpotifyPlaylistSongs = state => {
  const spotify = getSpotify(state);
  if (spotify) {
    return spotify.playlistSongs;
  }
  return null;
};

export const getSpotifySearchSongs = state => {
  const spotify = getSpotify(state);
  if (spotify) {
    return spotify.searchSongs;
  }
  return null;
};
