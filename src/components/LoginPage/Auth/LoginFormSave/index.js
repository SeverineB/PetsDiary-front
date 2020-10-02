/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import './LoginForm.scss';

const LoginForm = ({
  email,
  password,
  changeUserField,
  toggleLogin,
  openLogin,
  login,
}) => {
  const handleChange = (evt) => {
    console.log('valeur saisie vaut ', evt.target.value);
    changeUserField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Connecter un user');
    login();
  };

  const closeLogin = () => {
    toggleLogin();
  };

  console.log('openlogin dans LoginForm vaut ', openLogin);

  return (
    <div className={openLogin ? 'login-form' : 'login-form-opened'}>
      <button type="button" className="login-form-close" onClick={closeLogin}>Fermer</button>
      <Form className="login-form-inputs" onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          value={email}
          placeholder="Votre email"
          onChange={handleChange}
        />
        <Form.Input
          name="password"
          type="password"
          value={password}
          placeholder="Votre mot de passe"
          onChange={handleChange}
        />
        <Button type="submit" className="login-form-submit">Valider</Button>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUserField: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  openLogin: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.bool.isRequired,
};

export default LoginForm;
