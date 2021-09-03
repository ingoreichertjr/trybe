import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { getToken } from '../redux/actions';
import './Login.css';
import { LoginForm } from '../components';

const initialLoginState = {
  name: '',
  email: '',
};

const handleChange = (setLogin, { name, value }) => {
  setLogin((state) => ({ ...state, [name]: value }));
};

const handleGameStart = async (getTok, name, email, history) => {
  const gravatar = `https://www.gravatar.com/avatar/${md5(email).toString()}`;
  await getTok({ name, email, gravatar });
  history.push('/game');
};

function Login({ getTok, isFetchingToken }) {
  const [{ name, email }, setLogin] = useState(initialLoginState);
  const history = useHistory();

  if (isFetchingToken) {
    return <h3 className="login-reg-msg">Registering player...</h3>;
  }

  return (
    <LoginForm
      name={ name }
      email={ email }
      onChange={ handleChange }
      onClick={ handleGameStart }
      setLogin={ setLogin }
      history={ history }
      getTok={ getTok }
    />
  );
}

const mapStateToProps = (state) => ({
  isFetchingToken: state.user.isFetchingToken,
});

const mapDispatchToProps = (dispatch) => ({
  getTok: (payload) => dispatch(getToken(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  isFetchingToken: PropTypes.bool.isRequired,
  getTok: PropTypes.func.isRequired,
};
