import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Buttons = () => (
  <>
    <Link to="/login">
      <button type="button" className="login-button">Se connecter</button>
    </Link>
    <Link to="/register">
      <button type="button" className="register-button">Créer un compte</button>
    </Link>
  </>
);

export default Buttons;
