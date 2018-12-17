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

  renderCurrentlyPlayingSong() {
    const { currentlyPlaying } = this.props;

    if (currentlyPlaying) {
      return (
        <div className="spotify-currently-playing">
          <div className="spotify-currently-playing-header">Playing now</div>
          <img src="http://i.imgur.com/nszu54A.jpg" alt="N/A" />
          <div className="spotify-currently-playing-song">
            {currentlyPlaying.name}
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    const { playlistSongs } = this.props;
    return (
      <div>
        <div className="display-flex justify-center m-top-2">
          <button
            className="spotify-add-button"
            onClick={this.handleAddSongClick}
          >
            Add song
          </button>
        </div>
        {this.renderCurrentlyPlayingSong()}
        <SpotifyList header="Up next" songs={playlistSongs} />
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
