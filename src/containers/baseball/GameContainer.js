import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import requestStatusTypes from '../../utils/requestStatusTypes';
import {
  newStrike,
  newOut,
  newSingle,
  newDouble,
  newTriple,
  newHomeRun,
  newSteal,
  newPick
} from '../../actions/gameActions';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.handleStrikeClick = this.handleStrikeClick.bind(this);
    this.handleOutClick = this.handleOutClick.bind(this);
    this.handleSingleClick = this.handleSingleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleTripleClick = this.handleTripleClick.bind(this);
    this.handleHomeRunClick = this.handleHomeRunClick.bind(this);
    this.handleStealClick = this.handleStealClick.bind(this);
    this.handlePickClick = this.handlePickClick.bind(this);
    this.renderGameEventMessage = this.renderGameEventMessage.bind(this);
  }

  handleStrikeClick() {
    const {gameId} = this.props;
    this.props.newStrike(gameId);
  }

  handleOutClick() {
    const {gameId} = this.props;
    this.props.newOut(gameId);
  }

  handleSingleClick() {
    const {gameId} = this.props;
    this.props.newSingle(gameId);
  }

  handleDoubleClick() {
    const {gameId} = this.props;
    this.props.newDouble(gameId);
  }

  handleTripleClick() {
    const {gameId} = this.props;
    this.props.newTriple(gameId);
  }

  handleHomeRunClick() {
    const {gameId} = this.props;
    this.props.newHomeRun(gameId);
  }

  handleStealClick() {
    const {gameId} = this.props;
    this.props.newSteal(gameId);
  }

  handlePickClick() {
    const {gameId} = this.props;
    this.props.newPick(gameId)
  }

  renderGameEventMessage() {
    const {
      gameEventMessage,
      gameEventRequestStatus
    } = this.props;
    let status = '';
    if (gameEventRequestStatus === requestStatusTypes.SUCCEEDED) {
      status = 'success';
    } else if (gameEventRequestStatus === requestStatusTypes.PENDING) {
      status = 'pending';
    } else if (gameEventRequestStatus === requestStatusTypes.FAILED) {
      status = 'failed';
    }
    return (
      <div className="game-event-status-container">
        <div className={`game-event-status-circle ${status}`}></div>
        {gameEventMessage}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderGameEventMessage()}
        <div className="grass-container">
          <div className="content-title">Defense</div>
          <div className="button-wrapper">
            <button className="game-event-button button-bad" onClick={this.handleStrikeClick}>Strike</button>
            <button className="game-event-button button-bad" onClick={this.handleOutClick}>Out</button>
          </div>
        </div>
        <div className="dirt-container">
          <div className="content-title">Offense</div>
          <div className="button-wrapper">
            <div className="base-button" onClick={this.handleSingleClick}>
              <span>Single</span>
            </div>
            <div className="base-button" onClick={this.handleDoubleClick}>
              <span>Double</span>
            </div>
            <div className="base-button" onClick={this.handleTripleClick}>
              <span>Triple</span>
            </div>
            <div className="base-button" onClick={this.handleHomeRunClick}>
              <span>Home Run</span>
            </div>
          </div>
        </div>
        <div className="grass-container">
          <div className="content-title">Base running</div>
          <div className="button-wrapper">
            <button className="game-event-button button-good" onClick={this.handleStealClick}>Steal</button>
            <button className="game-event-button button-bad" onClick={this.handlePickClick}>Pick</button>
          </div>
        </div>
      </div>
    );
  }

}

GameContainer.propTypes = {
  gameId: PropTypes.string.isRequired,
  gameEventMessage: PropTypes.string.isRequired,
  gameEventRequestStatus: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  newStrike: PropTypes.func.isRequired,
  newOut: PropTypes.func.isRequired,
  newSingle: PropTypes.func.isRequired,
  newDouble: PropTypes.func.isRequired,
  newTriple: PropTypes.func.isRequired
};

const mapStateToProps = (state, {params}) => {
  return {
    gameId: params.id,
    gameEventMessage: state.baseball.gameEventMessage,
    gameEventRequestStatus: state.baseball.gameEventRequestStatus
  };
};

export default connect(mapStateToProps, {
  push,
  newStrike,
  newOut,
  newSingle,
  newDouble,
  newTriple,
  newHomeRun,
  newSteal,
  newPick
})(GameContainer);
