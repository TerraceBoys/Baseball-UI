import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import mlpIcon from '../images/mlp.jpg';

class Header extends Component {

  constructor(props) {
    super(props);
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  renderMenuItems() {
    const {gameId} = this.props;
    if (gameId) {
      return (
        <div className="header-menu">
          <Link to="/start">Exit</Link>
          <Link to={`/config/${gameId}`}>config</Link>
          <Link to={`/actions/${gameId}`}>actions</Link>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="app-header">
        <img className="mlp-logo" src={mlpIcon} alt="MLP" />
        <div className="header-title">Baseball</div>
        {this.renderMenuItems()}
      </div>
    );
  }
}

Header.propTypes = {
  gameId: PropTypes.string
};

export default Header;