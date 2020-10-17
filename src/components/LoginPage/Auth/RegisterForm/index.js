/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';

import './RegisterForm.scss';

const RegisterForm = ({
  showRegister,
  toggleShowRegister,
  email,
  password,
  username,
  changeUserField,
  registerUser,
}) => {
  const handleShow = () => {
    toggleShowRegister();
  };

  const handleClose = () => {
    toggleShowRegister();
  };

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
    <div className="modal-register-form">
      <Button className="login-button" variant="primary" onClick={handleShow}>
        Inscription
      </Button>

      <Modal show={showRegister} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Nom d'utilisateur</Form.Label>
              <Form.Control
                type="username"
                placeholder="Votre nom d'utilisateur"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Votre email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Votre mot de passe"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Valider
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  showRegister: PropTypes.bool.isRequired,
  toggleShowRegister: PropTypes.func.isRequired,
  changeUserField: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default RegisterForm;
