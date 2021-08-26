import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectStates from '../components/SelectStates';
import { personalUpdate } from '../Redux/Actions';

class PersonalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined,
      email: undefined,
      cpf: undefined,
      address: undefined,
      city: undefined,
      state: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, placeholder, value } }) {
    if (name === 'state') {
      this.setState({ [name]: value });
    } else {
      this.setState({ [placeholder.toLowerCase()]: value });
    }
  }

  handleSubmit() {
    const { name, email, cpf, address, city, state } = this.state;
    if (name && email && cpf && address && city && state) {
      const { submit, history } = this.props;
      submit(this.state);
      history.push('/professional');
    }
  }

  render() {
    const { name, email, cpf, address, city, state } = this.state;
    const { handleSubmit, handleChange: HC } = this;
    return (
      <form>
        <input type="text" placeholder="Name" value={ name } onChange={ HC } />
        <input type="email" placeholder="Email" value={ email } onChange={ HC } />
        <input type="text" placeholder="CPF" value={ cpf } onChange={ HC } />
        <input type="text" placeholder="Address" value={ address } onChange={ HC } />
        <input type="text" placeholder="City" value={ city } onChange={ HC } />
        <select name="state" id="state" value={ state } onChange={ HC }>
          <SelectStates />
        </select>
        <button type="button" onClick={ handleSubmit }>Enviar</button>
      </form>
    );
  }
}

PersonalForm.propTypes = {
  submit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submit: (payload) => dispatch(personalUpdate(payload)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
