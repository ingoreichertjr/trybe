import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAssignment } from '../actions';

class InputsList extends Component {
  constructor() {
    super();
    this.state = {
      textValue: ''
    };
  }

  addTask = () => {
    const { textValue } = this.state;
    const { add } = this.props;

    add(textValue);
    this.setState({ textValue: '' });
  }

  render() {
    const { textValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          value={ textValue }
          onChange={ (event) => this.setState({ textValue: event.target.value }) }
        />
        <button type="button" onClick={ this.addTask }>
          Adicionar Tarefa
        </button>
      </div>
    );
  }
}

InputsList.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchtoProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value))
});

export default connect(null, mapDispatchtoProps)(InputsList);