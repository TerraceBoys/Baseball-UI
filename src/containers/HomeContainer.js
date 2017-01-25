import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {launchBaseball} from '../actions/piControlActions';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.handleBaseballClick = this.handleBaseballClick.bind(this);
  }

  handleBaseballClick() {
    this.props.launchBaseball();
  }

  render() {
    return (
      <div className="home-container">
        <div className="temp-home-title">Terrace Pi Home</div>
        <Link className="temp-home-button" to="/baseball" onClick={this.handleBaseballClick}>Baseball</Link>
      </div>
    );
  }

}

HomeContainer.propTypes = {
  push: PropTypes.func.isRequired,
  launchBaseball: PropTypes.func.isRequired
};

const mapStateToProps = (state, {params}) => {
  return {};
};

export default connect(mapStateToProps, {
  push,
  launchBaseball
})(HomeContainer);
