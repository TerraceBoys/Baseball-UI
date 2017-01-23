import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';

class HomeContainer extends Component {

  render() {
    return (
      <div className="home-container">
        <div className="temp-home-title">Terrace Pi Home</div>
        <Link className="temp-home-button" to="/baseball">Baseball</Link>
      </div>
    );
  }

}

const mapStateToProps = (state, {params}) => {
  return {};
};

export default connect(mapStateToProps, {
  push
})(HomeContainer);
