import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import SpotifyList from "../../components/SpotifyList";
import { getSpotifySearchSongs } from "../../selectors/spotifySelectors";
import { addSongToQueue, fetchSearchSongs } from "../../actions/spotifyActions";

const mapStateToProps = state => {
  return {
    searchSongs: getSpotifySearchSongs(state)
  };
};

const mapDispatchToProps = {
  addSongToQueue,
  fetchSearchSongs,
  pushRoute: push
};

class AddSongContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
    this.handleSearchForSongClick = this.handleSearchForSongClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleBackClick() {
    this.props.pushRoute("/spotify");
  }

  handleSearchStringChange(e) {
    if (e.target.value !== " ") {
      this.setState({ searchString: e.target.value });
    }
  }

  handleSearchForSongClick() {
    const { searchString } = this.state;
    if (searchString) {
      this.props.fetchSearchSongs(searchString);
    }
  }

  handleAddClick(songId) {
    this.props.addSongToQueue(songId);
  }

  render() {
    const { searchString } = this.state;
    const { searchSongs } = this.props;
    return (
      <div>
        <button onClick={this.handleBackClick}>Back</button>
        <div>Search for a song to Add</div>
        <input
          type="text"
          value={searchString}
          onChange={this.handleSearchStringChange}
        />
        <button onClick={this.handleSearchForSongClick}>Search</button>
        <div>
          <SpotifyList
            addToQueueCallback={this.handleAddClick}
            header="Song search results"
            songs={searchSongs}
          />
        </div>
      </div>
    );
  }
}

AddSongContainer.propTypes = {
  addSongToQueue: PropTypes.func.isRequired,
  fetchSearchSongs: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
  searchSongs: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongContainer);
