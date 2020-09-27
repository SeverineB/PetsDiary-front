/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'semantic-ui-react';

import '../style.scss';

const RegisterForm = ({
  open,
  openModal,
  email,
  password,
  username,
  changeUserField,
  registerUser,
}) => {
  const handleChange = (evt) => {
    console.log('valeur saisie vaut ', evt.target.value);
    changeUserField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je veux enregistrer un nouvel utilisateur');
    registerUser();
  };

  return (
    <div className="register-form">
      <p>Pas encore de compte ?</p>
      <Modal
        open={open}
        trigger={<Button className="register-button">Créer un compte</Button>}
        onClose={openModal}
        onOpen={openModal}
      >
        <h2>Créer un compte</h2>
        <Modal.Content>
          <Form className="register-form-inputs" onSubmit={handleSubmit}>
            <Form.Input
              name="username"
              value={username}
              placeholder="Choisissez un nom d'utilisateur"
              onChange={handleChange}
            />
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
        </Modal.Content>
      </Modal>
    </div>
  );
};

RegisterForm.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  changeUserField: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default RegisterForm;
