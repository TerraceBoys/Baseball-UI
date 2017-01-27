import React, {Component, PropTypes} from 'react';
import './../styles/home.css';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import requestStatusTypes from '../utils/requestStatusTypes';
import {launchBaseball, launchMBTA, launchPersonPicker} from '../actions/piControlActions';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.maybeRenderLoadingScreen = this.maybeRenderLoadingScreen.bind(this);
    this.handlePersonPickerClick = this.handlePersonPickerClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.launchBaseballRequestStatus === requestStatusTypes.PENDING &&
      nextProps.launchBaseballRequestStatus === requestStatusTypes.SUCCEEDED) {
      this.props.push('/baseball');
    }
  }

  handlePersonPickerClick() {
    this.props.push('/person-picker');
  }

  maybeRenderLoadingScreen() {
    const {launchBaseballRequestStatus} = this.props;
    if (launchBaseballRequestStatus === requestStatusTypes.PENDING) {
      return (
        <div className="home-loading-popup">
          <i className="fa fa-spinner fa-3x rotating m-top-3" aria-hidden="true" />
          <div className="m-top-3">Loading Baseball...</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="home-container">
        {this.maybeRenderLoadingScreen()}
        <div className="home-title">Terrace Pi Control</div>
        <div className="home-button-container">
          <div className="home-button launch-mbta-button" onClick={this.props.launchMBTA}>MBTA Times</div>
          <div className="home-button launch-baseball-button" onClick={this.props.launchBaseball}>Baseball</div>
          <div className="home-button launch-people-button" onClick={this.handlePersonPickerClick}>Person Picker</div>
        </div>
      </div>
    );
  }

}

HomeContainer.propTypes = {
  push: PropTypes.func.isRequired,
  launchBaseball: PropTypes.func.isRequired,
  launchMBTA: PropTypes.func.isRequired,
  launchPersonPicker: PropTypes.func.isRequired,
  launchBaseballRequestStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, {params}) => {
  return {
    launchBaseballRequestStatus: state.piControl.launchBaseballRequestStatus
  };
};

export default connect(mapStateToProps, {
  push,
  launchBaseball,
  launchMBTA,
  launchPersonPicker
})(HomeContainer);
