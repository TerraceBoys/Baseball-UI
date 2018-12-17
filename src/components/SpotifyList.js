import React, { Component, PropTypes } from "react";
import FaIcon from "./FaIcon";

class SpotifyList extends Component {
  renderActionsForItem(songId) {
    const { addToQueueCallback } = this.props;
    if (addToQueueCallback) {
      return (
        <button
          className="spotify-add-song-button"
          onClick={() => addToQueueCallback(songId)}
        >
          <FaIcon isV2Icon={true} name="plus-square" />
        </button>
      );
    }
    return null;
  }

  renderListItems() {
    const { songs } = this.props;
    if (songs && songs.length) {
      return songs.map((song, i) => {
        return (
          <div key={i} className="spotify-list-item">
            <div className="img-title-wrapper">
              <img src="http://i.imgur.com/nszu54A.jpg" alt="N/A" />
              <div>
                {song.name} - {song.artist}
              </div>
            </div>
            {this.renderActionsForItem(song.id)}
          </div>
        );
      });
    }
    return null;
  }

  render() {
    const { header } = this.props;
    return (
      <div className="m-top-1">
        <div className="spotify-list-header">{header}</div>
        <div className="spotify-list m-top-2">{this.renderListItems()}</div>
      </div>
    );
  }
}

SpotifyList.propTypes = {
  addToQueueCallback: PropTypes.func,
  header: PropTypes.string.isRequired,
  songs: PropTypes.array
};

export default SpotifyList;
