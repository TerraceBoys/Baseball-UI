import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import requestStatusTypes from '../utils/requestStatusTypes';
import {getGameConfiguration} from '../actions/gameActions';

class ConfigurationContainer extends Component {

  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
    this.renderGameConfigContent = this.renderGameConfigContent.bind(this);
  }

  componentWillMount() {
    const {gameId} = this.props;
    this.props.getGameConfiguration(gameId);
  }

  renderGameConfigContent() {
    return (
      <p>
        Successfully loaded. Game Configuration stuff happens here
      </p>
    );
  }

  renderContent() {
    const {gameConfigRequestStatus} = this.props;
    if (gameConfigRequestStatus === requestStatusTypes.SUCCEEDED) {
      return this.renderGameConfigContent();
    } else if (gameConfigRequestStatus === requestStatusTypes.FAILED) {
      return (
        <p>
          Failed to load game configuration
        </p>
      );
    } else {
      return (
        <p>
          Loading game configuration
        </p>
      );
    }
  }

  render() {
    const {gameId} = this.props;
    return (
      <div>
        <Link to={`/game/${gameId}`}>Back</Link>
        {this.renderContent()}
      </div>
    );
  }

}

ConfigurationContainer.propTypes = {
  gameId: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  getGameConfiguration: PropTypes.func.isRequired,
  gameConfigRequestStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, {params}) => {
  return {
    gameId: params.id,
    gameConfigRequestStatus: state.game.gameConfigRequestStatus
  };
};

export default connect(mapStateToProps, {
  push,
  getGameConfiguration
})(ConfigurationContainer);
