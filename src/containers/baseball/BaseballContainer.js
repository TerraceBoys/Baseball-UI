import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import './../../styles/baseball.css';
import BaseballHeader from '../../components/BaseballHeader';
import {launchDefaultDisplay} from '../../actions/piControlActions';

class BaseballContainer extends Component {

  render() {
    const {children, gameId, launchDefaultDisplay} = this.props;
    return (
      <div className="baseball-container">
        <BaseballHeader gameId={gameId} launchDefaultDisplay={launchDefaultDisplay} />
        {children}
      </div>
    );
  }

}

BaseballContainer.propTypes = {
  children: PropTypes.node.isRequired,
  gameId: PropTypes.string,
  launchDefaultDisplay: PropTypes.func.isRequired
};

const mapStateToProps = (state, {params}) => {
  return {
    gameId: params.id
  };
};

export default connect(mapStateToProps, {
  launchDefaultDisplay
})(BaseballContainer);
