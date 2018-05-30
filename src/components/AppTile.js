import React, { Component, PropTypes } from 'react';

class AppTile extends Component {
  render() {
    const { className, icon, label, launchApp } = this.props;
    return (
      <div className={`app-tile-btn ${className}`}>
        <div className="app-tile-btn-title">{label}</div>
        <div className="app-tile-btn-body">
          <i className={`fas fa-${icon}`} aria-hidden="true" />
          <div className="app-tile-launch-btn" onClick={launchApp}>Lanuch</div>
        </div>
      </div>
    );
  }
}

AppTile.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  launchApp: PropTypes.func.isRequired,
};

export default AppTile;
