import React, { Component, PropTypes } from "react";

class SpotifyList extends Component {
  renderActionsForItem(songId) {
    const { addToQueueCallback } = this.props;
    if (addToQueueCallback) {
      return <button onClick={() => addToQueueCallback(songId)}>Add</button>;
    }
    return null;
  }

  renderListItems() {
    const { songs } = this.props;
    if (songs && songs.length) {
      return songs.map((song, i) => {
        return (
          <div key={i}>
            {song.name} - {song.artist} {this.renderActionsForItem(song.id)}
          </div>
        );
      });
    }
    return null;
  }

  render() {
    const { header } = this.props;
    return (
      <div>
        <div className="spotify-list-header">{header}</div>
        <div className="spotify-list m-top-3">{this.renderListItems()}</div>
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
