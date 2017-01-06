import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {startGame} from '../actions/gameActions';

class StartContainer extends Component {

  constructor(props) {
    super(props);
    this.handleStartGameClick = this.handleStartGameClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {gameStarted} = nextProps;
    if (gameStarted) {
      this.props.push('game');
    }
  }

  handleStartGameClick() {
    this.props.startGame();
  }

  render() {
    return (
      <div>
        <button className="start-game-btn" onClick={this.handleStartGameClick}>
          Start Game
        </button>
      </div>
    );
  }

}

StartContainer.propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {
    gameStarted: state.game.gameStarted
  };
};

export default connect(mapStateToProps, {
  push,
  startGame
})(StartContainer);
