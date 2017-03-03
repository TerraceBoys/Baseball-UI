import React, {Component, PropTypes} from 'react';
import './../../styles/personPicker.css';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import requestStatusTypes from '../../utils/requestStatusTypes';
import SimpleHeader from '../../components/SimpleHeader';
import {pickPerson} from '../../actions/personPickerActions';

class PersonPickerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      personList: []
    };
    this.renderPersonList = this.renderPersonList.bind(this);
    this.maybeRenderPickButton = this.maybeRenderPickButton.bind(this);
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

  maybeRenderPickButton() {
    const {personList} = this.state;
    const {pickPersonRequestStatus} = this.props;
    if (personList.length > 1 && pickPersonRequestStatus !== requestStatusTypes.PENDING) {
      return (
        <button className="pick-button" onClick={this.handlePickClick}>Pick A Person</button>
      );
    }
    else {
      return null;
    }
  }

  render() {
    const {currentInput, personList} = this.state;
    const {push} = this.props;
    return (
      <div className="person-picker-container">
        <SimpleHeader headerClass="person-picker-header" headerText="Person Picker" push={push} />
        <div className="content-wrapper">
          <div>
            <input type="text" className="add-person-input" value={currentInput} onChange={this.handlePersonChange} />
            <button className="add-person-button" onClick={this.handleAddPerson}>
              <i className="fa fa-plus fa-2x" aria-hidden="true" />
            </button>
          </div>
          {this.maybeRenderPickButton()}
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
  pickPerson: PropTypes.func.isRequired,
  pickPersonRequestStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, params) => {
  return {
    pickPersonRequestStatus: state.personPicker.pickPersonRequestStatus
  };
};

export default connect(mapStateToProps, {
  push,
  pickPerson
})(PersonPickerContainer);
