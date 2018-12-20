import React, { Component, PropTypes } from "react";
import FaIcon from "./FaIcon";

class SpotifyList extends Component {
  renderAddActionForSong(songId) {
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

  renderPlayActionForSong(songId) {
    const { playSongCallback } = this.props;
    if (playSongCallback) {
      return (
        <button
          className="spotify-add-song-button"
          onClick={() => playSongCallback(songId)}
        >
          <FaIcon isV2Icon={true} name="play" />
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
              <img
                src={song.albumSrc ? song.albumSrc : "http://i.imgur.com/nszu54A.jpg"}
                alt=""
              />
              <div>
                {song.name} - {song.artist}
              </div>
            </div>
            <div>
              {this.renderAddActionForSong(song.id)}
              {this.renderPlayActionForSong(song.id)}
            </div>
          </div>
        );
      });
    }
    return <div className="display-flex justify-center">No songs</div>;
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
  playSongCallback: PropTypes.func,
  header: PropTypes.string.isRequired,
  songs: PropTypes.array
};

export default SpotifyList;
