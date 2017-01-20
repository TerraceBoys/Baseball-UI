import React, {Component, PropTypes} from 'react';
import {Stack} from 'immutable';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';

class GameActionsContainer extends Component {

  constructor(props) {
    super(props);
    this.renderGameEvents = this.renderGameEvents.bind(this);
    this.renderNoActionsMessage = this.renderNoActionsMessage.bind(this);
  }

  renderGameEvents() {
    const {gameEventStack} = this.props;
    return gameEventStack.map((event, index) => {
      return (
        <tr key={index}>
          <td>{event}</td>
        </tr>
      );
    });
  }

  renderNoActionsMessage() {
    return (
      <tr>
        <td>There are no actions to show</td>
      </tr>
    );
  }

  render() {
    const {gameId, gameEventStack} = this.props;
    return (
      <div>
        <Link to={`/game/${gameId}`}>Back</Link>
        <p>Most recent events are at the top</p>
        <table>
          <tbody>
            {gameEventStack.size ? this.renderGameEvents() : this.renderNoActionsMessage()}
          </tbody>
        </table>
      </div>
    );
  }

}

GameActionsContainer.propTypes = {
  gameId: PropTypes.string.isRequired,
  gameEventStack: PropTypes.instanceOf(Stack).isRequired,
  push: PropTypes.func.isRequired
};

const mapStateToProps = (state, {params}) => {
  return {
    gameId: params.id,
    gameEventStack: state.game.gameEventStack
  };
};

export default connect(mapStateToProps, {
  push
})(GameActionsContainer);
