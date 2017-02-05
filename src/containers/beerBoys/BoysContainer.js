import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class BoysContainer extends Component {

  constructor(props) {
    super(props);
    this.handleAddNewBoyClick = this.handleAddNewBoyClick.bind(this);
  }

  handleAddNewBoyClick() {
    this.props.push('/beer-boys/add-boy');
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
  push: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {};
};

export default connect(mapStateToProps, {
  push
})(BoysContainer);
