import React, { Component, PropTypes } from "react";

const LOCKED_PASSWORD = "12345";

class AppTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPasswordPrompt: false,
      password: ""
    };
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
  }

  handleLaunchClick() {
    const { password } = this.state;
    const { launchApp, passwordRequired } = this.props;

    if (passwordRequired) {
      if (password === LOCKED_PASSWORD) {
        this.setState({ showPasswordPrompt: false, password: "" });
        launchApp();
      } else {
        this.setState({ showPasswordPrompt: true, password: "" });
      }
    } else {
      launchApp();
    }
  }

  handlePasswordUpdate(e) {
    this.setState({ password: e.target.value });
  }

  renderLaunchButton() {
    const { password, showPasswordPrompt } = this.state;

    return (
      <div>
        {showPasswordPrompt ? (
          <input
            type="text"
            onChange={this.handlePasswordUpdate}
            value={password}
          />
        ) : null}
        <div className="app-tile-launch-btn" onClick={this.handleLaunchClick}>
          Launch
        </div>
      </div>
    );
  }

  render() {
    const { className, icon, label, iconV2 } = this.props;
    return (
      <div className={`app-tile-btn ${className}`}>
        <div className="app-tile-btn-title">{label}</div>
        <div className="app-tile-btn-body">
          <i
            className={`fa${iconV2 ? "s" : ""} fa-${icon}`}
            aria-hidden="true"
          />
          {this.renderLaunchButton()}
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
  passwordRequired: PropTypes.bool.isRequired,
  iconV2: PropTypes.bool.isRequired
};

AppTile.defaultProps = {
  passwordRequired: false,
  iconV2: false
};

export default AppTile;
