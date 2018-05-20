import React, { Component, PropTypes } from 'react';
import './../styles/app.css';

class App extends Component {
  render() {
    const { children } = this.props;
    return <div className="app">{children}</div>;
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  gameId: PropTypes.string,
};

export default App;
