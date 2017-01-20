import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {
  newStrike,
  newOut,
  newSingle,
  newDouble,
  newTriple,
  newHomeRun,
  newSteal,
  newThrownOut
} from '../actions/gameActions';

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
    this.handleThrownOutClick = this.handleThrownOutClick.bind(this);
  }

  handleStrikeClick() {
    this.props.newStrike();
  }

  handleOutClick() {
    this.props.newOut();
  }

  handleSingleClick() {
    this.props.newSingle();
  }

  handleDoubleClick() {
    this.props.newDouble();
  }

  handleTripleClick() {
    this.props.newTriple();
  }

  handleHomeRunClick() {
    this.props.newHomeRun();
  }

  handleStealClick() {
    this.props.newSteal();
  }

  handleThrownOutClick() {
    this.props.newThrownOut()
  }

  render() {
    const {gameId} = this.props;
    return (
      <div>
        <div>
          <Link to="/start">Exit</Link>
        </div>
        <div>
          <Link to={`/config/${gameId}`}>config</Link>
        </div>
        <div>
          <Link to={`/actions/${gameId}`}>actions</Link>
        </div>
        <div>
          <button onClick={this.handleStrikeClick}>Strike</button>
        </div>
        <div>
          <button onClick={this.handleOutClick}>Out</button>
        </div>
        <div>
          <button onClick={this.handleSingleClick}>single</button>
        </div>
        <div>
          <button onClick={this.handleDoubleClick}>double</button>
        </div>
        <div>
          <button onClick={this.handleTripleClick}>triple</button>
        </div>
        <div>
          <button onClick={this.handleHomeRunClick}>home run</button>
        </div>
        <div>
          <button onClick={this.handleStealClick}>steal</button>
        </div>
        <div>
          <button onClick={this.handleThrownOutClick}>thrown out</button>
        </div>
      </div>
    );
  }

}

GameContainer.propTypes = {
  gameId: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  newStrike: PropTypes.func.isRequired,
  newOut: PropTypes.func.isRequired,
  newSingle: PropTypes.func.isRequired,
  newDouble: PropTypes.func.isRequired,
  newTriple: PropTypes.func.isRequired
};

const mapStateToProps = (state, {params}) => {
  return {
    gameId: params.id
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
  newThrownOut
})(GameContainer);
