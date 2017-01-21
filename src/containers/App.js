import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './../styles/App.css';
import Header from '../components/Header';

class App extends Component {

  render() {
    const {children, gameId} = this.props;
    return (
      <div className="app">
        <Header gameId={gameId} />
        <div className="app-body">
          {children}
        </div>
      </div>
    );
  }

}

App.propTypes = {
  children: PropTypes.node.isRequired,
  gameId: PropTypes.string
};

const mapStateToProps = (state, {params}) => {
  return {
    gameId: params.id
  };
};

export default connect(mapStateToProps)(App);
