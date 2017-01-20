import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import requestStatusTypes from '../utils/requestStatusTypes';
import {startNewGame} from '../actions/gameActions';

class StartContainer extends Component {

  constructor(props) {
    super(props);
    this.handleStartGameClick = this.handleStartGameClick.bind(this);
    this.renderStartGameStatus = this.renderStartGameStatus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.newGameId !== nextProps.newGameId) {
      this.props.push(`game/${nextProps.newGameId}`);
    }
  }

  handleStartGameClick() {
    this.props.startNewGame();
  }

  renderStartGameStatus() {
    const {startNewGameRequestStatus} = this.props;
    if (startNewGameRequestStatus === requestStatusTypes.PENDING) {
      return (
        <div>
          Setting up new game
        </div>
      );
    } else if (startNewGameRequestStatus === requestStatusTypes.FAILED) {
      return (
        <div>
          Failed to create new game
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <button className="start-game-btn" onClick={this.handleStartGameClick}>
          Start New Game
        </button>
        {this.renderStartGameStatus()}
      </div>
    );
  }

}

StartContainer.propTypes = {
  newGameId: PropTypes.number,
  startNewGameRequestStatus: PropTypes.string.isRequired,
  startNewGame: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {
    newGameId: state.game.newGameId,
    startNewGameRequestStatus: state.game.startNewGameRequestStatus
  };
};

export default connect(mapStateToProps, {
  push,
  startNewGame
})(StartContainer);
