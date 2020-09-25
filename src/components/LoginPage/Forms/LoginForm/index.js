/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

const LoginForm = ({
  email,
  password,
  changeUserField,
}) => {
  const handleChange = (evt) => {
    console.log('valeur saisie vaut ', evt.target.value);
    changeUserField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Connecter un user');
  };

  return (
    <div className="login-form">
      <h2>Se connecter</h2>
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
        <Button
          type="submit"
          className="login-form-submit"
        >Valider
        </Button>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUserField: PropTypes.func.isRequired,
};

export default LoginForm;
