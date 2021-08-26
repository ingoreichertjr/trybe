import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../Redux/Actions'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: undefined,
      email: undefined,
      password: undefined,
    }
  }

  handleRegister = () => {
    const { name, email, password } = this.state;
    const { register, history } = this.props;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (name && emailRegex.test(email) && password.length >= 6) {
      register(this.state);
      history.push('/')
    } else {
      this.setState({ name: undefined, email: undefined, password: undefined })
      alert("Por favor preencher os dados corretamente.")
    }
  }

  handleInputs = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    const { name, email, password } = this.state;
    const { handleInputs, handleRegister } = this;

    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={ name }
          onChange={ handleInputs }
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ handleInputs }
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={ password }
          onChange={ handleInputs }
          require
        />
        <button type="button" onClick={ handleRegister }>Register</button>
        <button><Link to="/">Go Back</Link></button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (payload) => dispatch(registerUser(payload))
})

export default connect(null, mapDispatchToProps)(Home)
