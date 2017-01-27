import React, {Component, PropTypes} from 'react';
import './../../styles/personPicker.css';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class PersonPickerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      personList: []
    };
    this.renderPersonList = this.renderPersonList.bind(this);
    this.renderPersonListItem = this.renderPersonListItem.bind(this);
    this.handleAddPerson = this.handleAddPerson.bind(this);
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleBackClick() {
    this.props.push('/');
  }

  handleAddPerson() {
    const {currentInput, personList} = this.state;
    if (currentInput.length > 0) {
      personList.push(currentInput);
      this.setState({personList: personList, currentInput: ''});
    }
  }

  handlePersonChange(evt) {
    this.setState({currentInput: evt.target.value});
  }

  renderPersonListItem(person, index) {
    const {personList} = this.state;
    return (
      <li key={index}>
        {person}
        <span onClick={() => {personList.splice(index, 1); this.setState({personList: personList})}}>-</span>
      </li>
    );
  }

  renderPersonList() {
    const {personList} = this.state;
    return (
      <ul className="person-list">
        {personList.map((person, index) => this.renderPersonListItem(person, index))}
      </ul>
    );
  }

  render() {
    const {currentInput} = this.state;
    return (
      <div className="person-picker-container">
        <button onClick={this.handleBackClick}>Back</button>
        <div className="content-wrapper">
          <div>
            <input type="text" className="add-person-input" value={currentInput} onChange={this.handlePersonChange} />
            <button className="add-person-button" onClick={this.handleAddPerson}>
              <i className="fa fa-plus fa-2x" aria-hidden="true" />
            </button>
          </div>
          {this.renderPersonList()}
        </div>
      </div>
    );
  }

}

PersonPickerContainer.propTypes = {
  push: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {};
};

export default connect(mapStateToProps, {
  push
})(PersonPickerContainer);
