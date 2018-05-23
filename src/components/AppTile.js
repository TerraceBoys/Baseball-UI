import React, { Component, PropTypes } from 'react';

class AppTile extends Component {
  render() {
    const { className, label, launchApp } = this.props;
    return (
      <div className={`app-tile-btn ${className}`} onClick={launchApp}>
        <div className="app-tile-btn-title">{label}</div>
        <div className="app-tile-btn-body">launch</div>
      </div>
    );
  }
}

AppTile.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  launchApp: PropTypes.func.isRequired,
};

export default AppTile;
