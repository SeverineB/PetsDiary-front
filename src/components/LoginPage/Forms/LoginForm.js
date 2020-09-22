import React from 'react';

import './style.scss';

const LoginForm = () => (
  <div className="login-form">
    <h2>Se connecter</h2>
    <form className="login-form-inputs">
      <label htmlFor="email">
        <input type="email" id="email" placeholder="Votre email" />
      </label>
      <label htmlFor="password">
        <input type="password" id="password" placeholder="Votre mot de passe" />
      </label>
      <button type="submit" className="login-form-submit">Valider</button>
    </form>
  </div>
);

export default LoginForm;