import React, { Component, PropTypes } from 'react';
import { Stack } from 'immutable';
import { connect } from 'react-redux';
import { undoStrike } from '../../actions/baseballActions';

class GameActionsContainer extends Component {
  constructor(props) {
    super(props);
    this.renderEventUndo = this.renderEventUndo.bind(this);
    this.renderGameEvents = this.renderGameEvents.bind(this);
    this.renderNoActionsMessage = this.renderNoActionsMessage.bind(this);
  }

  renderEventUndo(event) {
    return (
      <td
        className="undo-action"
        onClick={() => {
          this.props[event.undoMethod]();
        }}
      >
        <i className="fa fa-undo m-right-1" aria-hidden="true" />
        undo
      </td>
    );
  }

  renderGameEvents() {
    const { gameEventStack } = this.props;
    return gameEventStack.map((event, index) => {
      return (
        <tr key={index}>
          <td>{event.name}</td>
          {index === gameEventStack.size - 1
            ? this.renderEventUndo(event)
            : null}
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
    const { gameEventStack } = this.props;
    return (
      <div className="m-top-3">
        <table className="game-actions-table">
          <tbody>
            {gameEventStack.size
              ? this.renderGameEvents()
              : this.renderNoActionsMessage()}
          </tbody>
        </table>
      </div>
    );
  }
}

GameActionsContainer.propTypes = {
  gameId: PropTypes.string.isRequired,
  gameEventStack: PropTypes.instanceOf(Stack).isRequired,
  undoStrike: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  return {
    gameId: params.id,
    gameEventStack: state.baseball.gameEventStack,
  };
};

export default connect(mapStateToProps, {
  undoStrike,
})(GameActionsContainer);
