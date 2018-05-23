import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import requestStatusTypes from '../../utils/requestStatusTypes';
import { startNewGame, joinCurrentGame } from '../../actions/baseballActions';

class StartContainer extends Component {
  constructor(props) {
    super(props);
    this.handleStartNewGameClick = this.handleStartNewGameClick.bind(this);
    this.handleJoinCurrentGameClick = this.handleJoinCurrentGameClick.bind(
      this
    );
  }

  componentWillReceiveProps(nextProps) {
    const { beginGameId, joinCurrentGameRequestStatus, pushRoute } = this.props;
    if (
      beginGameId !== nextProps.beginGameId ||
      (joinCurrentGameRequestStatus === requestStatusTypes.PENDING &&
        nextProps.joinCurrentGameRequestStatus === requestStatusTypes.SUCCEEDED)
    ) {
      pushRoute(`/baseball/${nextProps.beginGameId}`);
    }
  }

  handleStartNewGameClick() {
    this.props.startNewGame();
  }

  handleJoinCurrentGameClick() {
    this.props.joinCurrentGame();
  }

  render() {
    return (
      <div className="start-page-button-wrapper">
        <button
          className="start-page-button"
          onClick={this.handleStartNewGameClick}
        >
          Start New Game
        </button>
        <button
          className="start-page-button"
          onClick={this.handleJoinCurrentGameClick}
        >
          Join Current Game
        </button>
      </div>
    );
  }
}

StartContainer.propTypes = {
  beginGameId: PropTypes.number,
  startNewGameRequestStatus: PropTypes.string.isRequired,
  joinCurrentGameRequestStatus: PropTypes.string.isRequired,
  startNewGame: PropTypes.func.isRequired,
  joinCurrentGame: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
};

const mapStateToProps = (state, params) => {
  return {
    beginGameId: state.baseball.beginGameId,
    startNewGameRequestStatus: state.baseball.startNewGameRequestStatus,
    joinCurrentGameRequestStatus: state.baseball.joinCurrentGameRequestStatus,
  };
};

export default connect(mapStateToProps, {
  pushRoute: push,
  startNewGame,
  joinCurrentGame,
})(StartContainer);
