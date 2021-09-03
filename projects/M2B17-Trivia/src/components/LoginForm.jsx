import React from 'react';
import PropTypes from 'prop-types';

const emailRegex = /\S+@\S+\.\S+/;

function LoginForm({ name, email, onChange, onClick, setLogin, history, getTok }) {
  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="login-heading">Trivia Login</h3>
        <input
          name="name"
          data-testid="input-player-name"
          className="login-name"
          type="text"
          placeholder="Name"
          value={ name }
          onChange={ ({ target }) => onChange(setLogin, target) }
        />
        <input
          name="email"
          data-testid="input-gravatar-email"
          className="login-email"
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ ({ target }) => onChange(setLogin, target) }
        />
        <button
          data-testid="btn-play"
          className="login-start-btn"
          type="button"
          disabled={ !(name.length > 0 && emailRegex.test(email)) }
          onClick={ () => onClick(getTok, name, email, history) }
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

export default LoginForm;

LoginForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  setLogin: PropTypes.func.isRequired,
  getTok: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
