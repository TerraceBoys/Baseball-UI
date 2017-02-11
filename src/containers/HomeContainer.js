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
    this.handleBeerBoysClick = this.handleBeerBoysClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.launchBaseballRequestStatus === requestStatusTypes.PENDING &&
      nextProps.launchBaseballRequestStatus === requestStatusTypes.SUCCEEDED) {
      this.props.push('/baseball');
    }
    if (this.props.launchPersonPickerRequestStatus === requestStatusTypes.PENDING &&
      nextProps.launchPersonPickerRequestStatus === requestStatusTypes.SUCCEEDED) {
      this.props.push('/person-picker');
    }
  }

  handleBeerBoysClick() {
    this.props.push('/beer-boys');
  }

  maybeRenderLoadingScreen() {
    const {launchBaseballRequestStatus} = this.props;
    if (launchBaseballRequestStatus === requestStatusTypes.PENDING) {
      return (
        <div className="baseball-loading-popup">
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
          <div className="home-app-button launch-mbta-button" onClick={this.props.launchMBTA}>MBTA Times</div>
          <div className="home-app-button launch-baseball-button" onClick={this.props.launchBaseball}>Baseball</div>
          <div className="home-app-button launch-people-button" onClick={this.props.launchPersonPicker}>Person Picker</div>
          <div className="home-app-button launch-beer-boys-button" onClick={this.handleBeerBoysClick}>Beer Boys</div>
        </div>
      </div>
    );
  }

}

HomeContainer.propTypes = {
  push: PropTypes.func.isRequired,
  launchBaseball: PropTypes.func.isRequired,
  launchMBTA: PropTypes.func.isRequired,
  launchBaseballRequestStatus: PropTypes.string.isRequired,
  launchPersonPicker: PropTypes.func.isRequired,
  launchPersonPickerRequestStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, {params}) => {
  return {
    launchBaseballRequestStatus: state.piControl.launchBaseballRequestStatus,
    launchPersonPickerRequestStatus: state.piControl.launchPersonPickerRequestStatus
  };
};

export default connect(mapStateToProps, {
  push,
  launchBaseball,
  launchMBTA,
  launchPersonPicker
})(HomeContainer);
