import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class BoysContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddNewBoyClick = this.handleAddNewBoyClick.bind(this);
  }

  handleAddNewBoyClick() {
    const { pushRoute } = this.props;
    pushRoute('/beer-boys/add-boy');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddNewBoyClick}>Add new boy</button>
      </div>
    );
  }
}

BoysContainer.propTypes = {
  pushRoute: PropTypes.func.isRequired,
};

export default connect(null, {
  pushRoute: push,
})(BoysContainer);
