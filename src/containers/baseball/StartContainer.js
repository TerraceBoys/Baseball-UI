import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import requestStatusTypes from '../../utils/requestStatusTypes';
import {startNewGame, joinCurrentGame} from '../../actions/gameActions';

class StartContainer extends Component {

  constructor(props) {
    super(props);
    this.handleStartNewGameClick = this.handleStartNewGameClick.bind(this);
    this.handleJoinCurrentGameClick = this.handleJoinCurrentGameClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.beginGameId !== nextProps.beginGameId ||
      (this.props.joinCurrentGameRequestStatus === requestStatusTypes.PENDING &&
      nextProps.joinCurrentGameRequestStatus === requestStatusTypes.SUCCEEDED)) {
      this.props.push(`/baseball/${nextProps.beginGameId}`);
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
        <button className="start-page-button" onClick={this.handleStartNewGameClick}>
          Start New Game
        </button>
        <button className="start-page-button" onClick={this.handleJoinCurrentGameClick}>
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
  push: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {
    beginGameId: state.baseball.beginGameId,
    startNewGameRequestStatus: state.baseball.startNewGameRequestStatus,
    joinCurrentGameRequestStatus: state.baseball.joinCurrentGameRequestStatus
  };
};

export default connect(mapStateToProps, {
  push,
  startNewGame,
  joinCurrentGame
})(StartContainer);
