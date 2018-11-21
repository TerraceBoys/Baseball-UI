import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import SpotifyList from "../../components/SpotifyList";
import {
  getSpotifyCurrentlyPlaying,
  getSpotifyPlaylistSongs
} from "../../selectors/spotifySelectors";
import {
  fetchCurrentlyPlaying,
  fetchPlaylistSongs
} from "../../actions/spotifyActions";

const mapStateToProps = state => {
  return {
    currentlyPlaying: getSpotifyCurrentlyPlaying(state),
    playlistSongs: getSpotifyPlaylistSongs(state)
  };
};

const mapDispatchToProps = {
  fetchCurrentlyPlaying,
  fetchPlaylistSongs,
  pushRoute: push
};

class PlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddSongClick = this.handleAddSongClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentlyPlaying();
    this.props.fetchPlaylistSongs();
  }

  handleAddSongClick() {
    this.props.pushRoute("/spotify/add-song");
  }

  render() {
    const { currentlyPlaying, playlistSongs } = this.props;
    return (
      <div>
        {currentlyPlaying && (
          <div>currently playing: {currentlyPlaying.name}</div>
        )}
        <button onClick={this.handleAddSongClick}>Queue New Song</button>
        <SpotifyList header="Current playlist songs" songs={playlistSongs} />
      </div>
    );
  }
}

PlaylistContainer.propTypes = {
  currentlyPlaying: PropTypes.object,
  playlistSongs: PropTypes.array,
  pushRoute: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistContainer);
