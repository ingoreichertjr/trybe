import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { getToken } from '../redux/actions';
import './Login.css';

const emailRegex = /\S+@\S+\.\S+/;

const startGame = async (name, email, tokenDspch, history) => {
  const gravatar = `https://www.gravatar.com/avatar/${md5(email).toString()}`;
  await tokenDspch({ name, email, gravatar });
  history.push('/game');
};

function Login({ tokenDspch, isFetchingToken }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  if (isFetchingToken) return <h3 className="login-reg-msg">Registering player...</h3>;
  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="login-heading">Trivia Login</h3>
        <input
          data-testid="input-player-name"
          className="login-name"
          type="text"
          placeholder="Name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          data-testid="input-gravatar-email"
          className="login-email"
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <button
          data-testid="btn-play"
          className="login-start-btn"
          type="button"
          disabled={ !(name.length > 0 && emailRegex.test(email)) }
          onClick={ () => startGame(name, email, tokenDspch, history) }
        >
          Start Game
        </button>
        <button
          data-testid="btn-settings"
          className="login-settings-btn"
          type="button"
          onClick={ () => history.push('/settings') }
        >
          Settings
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isFetchingToken: state.user.isFetchingToken,
});

const mapDispatchToProps = (dispatch) => ({
  tokenDspch: (payload) => dispatch(getToken(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  isFetchingToken: PropTypes.bool.isRequired,
  tokenDspch: PropTypes.func.isRequired,
};
