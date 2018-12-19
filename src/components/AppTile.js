import React, { Component, PropTypes } from "react";
import FaIcon from "./FaIcon";

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
    const { passwordRequired } = this.props;
    const locked = passwordRequired && !showPasswordPrompt;

    return (
      <div>
        <div
          className={`app-tile-launch-btn ${
            locked ? "app-tile-launch-btn-locked" : ""
          }`}
          onClick={this.handleLaunchClick}
        >
          {locked && <FaIcon name="lock" />}
          Launch
        </div>
        {showPasswordPrompt ? (
          <input
            className="app-tile-password-input"
            type="password"
            onChange={this.handlePasswordUpdate}
            placeholder="Password"
            value={password}
          />
        ) : null}
      </div>
    );
  }

  render() {
    const { className, icon, label, iconV2 } = this.props;
    return (
      <div className={`app-tile ${className}`}>
        <div className="app-tile-title">{label}</div>
        <div className="app-tile-body">
          <FaIcon classNames="app-tile-icon" isV2Icon={iconV2} name={icon} />
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
