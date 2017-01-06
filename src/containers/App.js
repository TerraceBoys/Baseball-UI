import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './../styles/App.css';
import {testAction} from '../actions/gameActions';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.testAction();
  }

  render() {
    const {test} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Baseball UI</h2>
        </div>
        <p className="App-intro">
          Button clicks:{test}
          <button onClick={this.handleButtonClick}>
            Click me
          </button>
        </p>
      </div>
    );
  }

}

App.propTypes = {
  test: PropTypes.number.isRequired,
  testAction: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {
    test: state.test
  };
};

export default connect(mapStateToProps, {
  testAction
})(App);
