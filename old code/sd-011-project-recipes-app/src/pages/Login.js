import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [login, setLogin] = React.useState({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = React.useState({
    disabled: true,
  });

  function setToken() {
    localStorage.setItem('mealsToken', [1]);
    localStorage.setItem('cocktailsToken', [1]);
  }

  function setUserLocalStorage() {
    const user = {
      email: login.email,
    };
    localStorage.setItem('user', JSON.stringify(user));
  }

  function verificationLogin() {
    const validateEmail = login.email.split('').includes('@')
      && login.email.split('.').includes('com');
    const lengthPasswords = 6;
    const validatePassword = login.password.length > lengthPasswords;
    if (validateEmail && validatePassword && disabled) {
      setDisabled({
        disabled: false,
      });
      setToken();
    } else if ((!validateEmail || !validatePassword) && !disabled) {
      setDisabled({
        disabled: true,
      });
    }
  }

  function handleLogin({ target }) {
    const { value, name } = target;
    setLogin({
      ...login,
      [name]: value,
    });

    if (login.password && login.email) {
      verificationLogin();
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="email">
        <input
          data-testid="email-input"
          name="email"
          type="text"
          onChange={ (e) => { handleLogin(e); } }
          placeholder="Seu email"
        />
      </label>
      <label htmlFor="password">
        <input
          name="password"
          data-testid="password-input"
          type="password"
          placeholder="Seu Senha"
          onChange={ handleLogin }
          onKeyUp={ verificationLogin }
        />
      </label>
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled.disabled }
          onClick={ setUserLocalStorage }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
