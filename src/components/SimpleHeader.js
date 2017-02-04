import React, {Component, PropTypes} from 'react';

class SimpleHeader extends Component {

  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleHomeClick() {
    this.props.push('/');
  }

  render() {
    const {headerClass, headerText} = this.props;
    return (
      <div className={`simple-header ${headerClass}`}>
        {headerText}
        <button className="home-button" onClick={this.handleHomeClick}>Home</button>
      </div>
    );
  }
}

SimpleHeader.propTypes = {
  headerClass: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired
};

export default SimpleHeader;