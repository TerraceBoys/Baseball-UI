import React, {Component, PropTypes} from 'react';
import './../../styles/beerBoys.css';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import SimpleHeader from '../../components/SimpleHeader';

class BeerBoysContainer extends Component {

  render() {
    const {children, push} = this.props;
    return (
      <div className="beer-boys-container">
        <SimpleHeader headerClass="beer-boys-header" headerText="Beer Boys" push={push} />
        {children}
      </div>
    );
  }

}

BeerBoysContainer.propTypes = {
  children: PropTypes.node.isRequired,
  push: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {};
};

export default connect(mapStateToProps, {
  push
})(BeerBoysContainer);
