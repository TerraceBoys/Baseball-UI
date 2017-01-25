import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import mlpIcon from '../images/mlp.jpg';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.closeMenu = this.closeMenu.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.closeMenu, false);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeMenu, false);
  }

  closeMenu() {
    const {expanded} = this.state;
    if (expanded) {
      this.setState({expanded: false});
    }
  }

  handleMenuClick(evt) {
    evt.stopPropagation();
    this.setState({expanded: !this.state.expanded});
  }

  handleMenuItemClick() {
    this.setState({expanded: false});
  }

  renderMenuItems() {
    const {expanded} = this.state;
    const {gameId} = this.props;
    if (expanded) {
      return (
        <div className="header-menu-drop-down">
          {gameId ? <Link className="header-menu-item" to={`/baseball/${gameId}`} onClick={this.handleMenuItemClick}>
            <i className="fa fa-beer" aria-hidden="true" />
            Game
          </Link> : null}
          {gameId ? <Link className="header-menu-item" to={`/baseball/${gameId}/actions`} onClick={this.handleMenuItemClick}>
            <i className="fa fa-cog" aria-hidden="true" />
            Actions
          </Link> : null}
          <Link className="header-menu-item exit-item" to="/">
            <i className="fa fa-sign-out" aria-hidden="true" />
            Exit
          </Link>
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
        <div className="header-menu">
          <i className="fa fa-bars fa-2x header-menu-icon" aria-hidden="true" onClick={this.handleMenuClick} />
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  gameId: PropTypes.string,
};

export default Header;