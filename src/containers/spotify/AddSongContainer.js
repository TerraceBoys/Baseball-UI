import { debounce } from 'underscore';
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import SpotifyList from "../../components/SpotifyList";
import FaIcon from "../../components/FaIcon";
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
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.debouncedSearchForSong = debounce(this.searchForSong.bind(this), 1000);
  }

  handleBackClick() {
    this.props.pushRoute("/spotify");
  }

  handleSearchChange(e) {
    if (e.target.value !== " ") {
      this.setState({ searchString: e.target.value });
      this.debouncedSearchForSong();
    }
  }

  searchForSong() {
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
        <button className="spotify-back-button" onClick={this.handleBackClick}>
          <FaIcon name="chevron-left" />
          Back
        </button>
        <div className="spotify-search-container">
          <input
            type="text"
            value={searchString}
            onChange={this.handleSearchChange}
            placeholder="Search"
          />
        </div>
        <div>
          <SpotifyList
            addToQueueCallback={this.handleAddClick}
            header="Results"
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
