import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginStatus } from '../Redux/Actions';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: undefined,
      password: undefined,
    }
  }

  handleLogin = (e) => {
    const { email, password } = this.state;
    const { userDatabase, updateLogin, history } = this.props;

    const isRegistered = userDatabase.some((u) => (
      u.email === email && u.password === password
    ));

    if (isRegistered) {
      updateLogin(true);
      history.push('/userlist')
    } else {
      alert('Invalid username or password.')
    }
  }

  handleInputs = ({ target: { type, value } }) => {
    this.setState({ [type]: value });
  }

  render() {
    const { email, password } = this.state;
    const { handleInputs, handleLogin } = this;

    return (
      <form>
        <input
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ handleInputs }
        />
        <input
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ handleInputs }
        />
        <button type="button" onClick={ handleLogin }>Login</button>
        <button><Link to="/signup">Signup</Link></button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  userDatabase: state.registerRed,
})

const mapDispatchToProps = (dispatch) => ({
  updateLogin: (payload) => dispatch(loginStatus(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
