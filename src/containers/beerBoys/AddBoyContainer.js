import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class AddBoyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boyName: '',
    };
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleBoyNameChange = this.handleBoyNameChange.bind(this);
    this.handleAddBoyClick = this.handleAddBoyClick.bind(this);
  }

  handleBackClick() {
    const { pushRoute } = this.props;
    pushRoute('/beer-boys');
  }

  handleBoyNameChange(evt) {
    if (evt.target.value !== ' ') {
      this.setState({ boyName: evt.target.value });
    }
  }

  handleAddBoyClick() {
    const { boyName } = this.state;
    if (boyName.length) {
      console.log(`Adding a new boy: ${boyName}`);
    }
  }

  render() {
    const { boyName } = this.state;
    return (
      <div>
        <button onClick={this.handleBackClick}>Back</button>
        <div className="add-boy-wrapper">
          Add a new beer boy
          <input
            type="text"
            value={boyName}
            onChange={this.handleBoyNameChange}
          />
          <button
            onClick={this.handleAddBoyClick}
            disabled={boyName.length === 0}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

AddBoyContainer.propTypes = {
  pushRoute: PropTypes.func.isRequired,
};

export default connect(null, {
  push: pushRoute,
})(AddBoyContainer);
