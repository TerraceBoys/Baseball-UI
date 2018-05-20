import React, { Component, PropTypes } from 'react';
import './../../styles/beerBoys.css';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SimpleHeader from '../../components/SimpleHeader';

class BeerBoysContainer extends Component {
  render() {
    const { children, pushRoute } = this.props;
    return (
      <div className="beer-boys-container">
        <SimpleHeader
          headerClass="beer-boys-header"
          headerText="Beer Boys"
          pushRoute={pushRoute}
        />
        {children}
      </div>
    );
  }
}

BeerBoysContainer.propTypes = {
  children: PropTypes.node.isRequired,
  pushRoute: PropTypes.func.isRequired,
};

export default connect(null, {
  pushRoute,
})(BeerBoysContainer);
