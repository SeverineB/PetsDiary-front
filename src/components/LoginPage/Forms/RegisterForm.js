import React from 'react';

import './style.scss';

const RegisterForm = () => (
  <div className="register-form">
    <h2>Créer un compte</h2>
    <form className="register-form-inputs">
      <label htmlFor="username">
        <input type="text" id="username" placeholder="Choisissez un nom d'utilisateur" />
      </label>
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

export default RegisterForm;
