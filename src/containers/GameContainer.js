import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class GameContainer extends Component {

  componentWillMount() {
    const {gameStarted} = this.props;
    if (!gameStarted) {
      this.props.push('/start');
    }
  }

  render() {
    return (
      <p>
        Game stuff happens here
      </p>
    );
  }

}

GameContainer.propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  push: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {
    gameStarted: state.game.gameStarted
  };
};

export default connect(mapStateToProps, {
  push
})(GameContainer);
