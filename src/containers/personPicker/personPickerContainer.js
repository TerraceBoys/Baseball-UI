import React, {Component, PropTypes} from 'react';
import './../../styles/personPicker.css';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {pickPerson} from '../../actions/personPickerActions';

class PersonPickerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      personList: []
    };
    this.renderPersonList = this.renderPersonList.bind(this);
    this.handleAddPerson = this.handleAddPerson.bind(this);
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handlePickClick = this.handlePickClick.bind(this);
  }

  handleBackClick() {
    this.props.push('/');
  }

  handlePickClick() {
    const {personList} = this.state;
    this.props.pickPerson(personList);
  }

  handleAddPerson() {
    const {currentInput, personList} = this.state;
    if (currentInput.length > 0) {
      personList.push(currentInput);
      this.setState({personList: personList, currentInput: ''});
    }
  }

  handlePersonChange(evt) {
    if (evt.target.value !== ' ') {
      this.setState({currentInput: evt.target.value});
    }
  }

  renderPersonList() {
    const {personList} = this.state;
    return personList.map((person, index) => {
      return (
        <tr key={index}>
          <td>{person}</td>
          <td>
            <i
              className="fa fa-minus fa-2x"
              onClick={() => {personList.splice(index, 1); this.setState({personList: personList})}}
              aria-hidden="true"
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    const {currentInput, personList} = this.state;
    return (
      <div className="person-picker-container">
        <button className="back-button" onClick={this.handleBackClick}>Back</button>
        <div className="content-wrapper">
          <div>
            <input type="text" className="add-person-input" value={currentInput} onChange={this.handlePersonChange} />
            <button className="add-person-button" onClick={this.handleAddPerson}>
              <i className="fa fa-plus fa-2x" aria-hidden="true" />
            </button>
          </div>
          {personList.length > 0 ? <button className="pick-button" onClick={this.handlePickClick}>Pick A Person</button> : null}
          {personList.length > 0 ?
            <table className="person-table">
              <tbody>
                {this.renderPersonList()}
              </tbody>
            </table> : null}
        </div>
      </div>
    );
  }

}

PersonPickerContainer.propTypes = {
  push: PropTypes.func.isRequired,
  pickPerson: PropTypes.func.isRequired
};

const mapStateToProps = (state, params) => {
  return {};
};

export default connect(mapStateToProps, {
  push,
  pickPerson
})(PersonPickerContainer);
