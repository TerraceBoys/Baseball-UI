import React, {Component, PropTypes} from 'react';
import {Stack} from 'immutable';
import {connect} from 'react-redux';
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
          {index === gameEventStack.size - 1 ?
            <td className="undo-action">
              <i className="fa fa-undo m-right-1" aria-hidden="true" />
              undo
            </td> : null}
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
    const {gameEventStack} = this.props;
    return (
      <div className="m-top-3">
        <table className="game-actions-table">
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
    gameEventStack: state.baseball.gameEventStack
  };
};

export default connect(mapStateToProps, {
  push
})(GameActionsContainer);
