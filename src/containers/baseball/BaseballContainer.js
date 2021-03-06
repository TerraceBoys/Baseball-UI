import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './../../styles/baseball.css';
import BaseballHeader from '../../components/BaseballHeader';

class BaseballContainer extends Component {
  render() {
    const { children, gameId } = this.props;
    return (
      <div className="baseball-container">
        <BaseballHeader gameId={gameId} />
        {children}
      </div>
    );
  }
}

BaseballContainer.propTypes = {
  children: PropTypes.node.isRequired,
  gameId: PropTypes.string,
};

const mapStateToProps = (state, { params }) => {
  return {
    gameId: params.id,
  };
};

export default connect(mapStateToProps)(BaseballContainer);
