/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';

const LoginForm = ({
  open,
  openModal,
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
      <Modal
        closeIcon
        open={open}
        trigger={<Button className="login-button">Se connecter</Button>}
        onClose={openModal}
        onOpen={openModal}
      >
        <h2>Se connecter</h2>
        <Modal.Content>
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
        </Modal.Content>
      </Modal>
    </div>
  );
};

LoginForm.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUserField: PropTypes.func.isRequired,
};

export default LoginForm;
