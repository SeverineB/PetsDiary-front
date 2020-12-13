/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';

import './LoginForm.scss';

const LoginForm = ({
    changeUserField,
    email,
    password,
    login,
    isLoading,
    isLogged,
    isFailed,
    error,
    errors,
    setErrors,
    clearErrors
}) => {
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        clearErrors();
      }, []);

    const checkEmail = (value) => {
        if (value.length < 1) {
            setErrors('email', 'L\'email doit être renseigné');
        }
        else if (!EmailValidator.validate(value)) {
            setErrors('email', 'Le format de l\'email n\'est pas valide');
        }
        else {
            setErrors('email', '');
        }
        return true;
    };

    const checkPassword = (value) => {
        if (value.length < 1) {
            setErrors('password', 'Le mot de passe doit être renseigné');
        }
        else if (value.length > 0 && value.length < 5) {
            setErrors('password', 'Le mot de passe doit contenir au moins 5 caractères');
        }
        else if (!/[A-Z]/.test(value)) {
            setErrors('password', 'Le mot de passe doit contenir au moins 1 majuscule');
        }
        else if (!/[0-9]/.test(value)) {
            setErrors('password', 'Le mot de passe doit contenir au moins 1 chiffre');
        }
        else {
            setErrors('password', '');
        }
        return true;
    };

    const handleChange = (evt) => {
        evt.preventDefault();
        changeUserField(evt.target.value, evt.target.name);
        switch (evt.target.name) {
            case 'email':
              checkEmail(evt.target.value);
              break;
            case 'password':
              checkPassword(evt.target.value);
              break;
            default:
          }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (checkEmail && checkPassword) {
            login();
        }
    };

    return (
        <div className="modal-login-form">
            {!isLogged && !isLoading && (
                <>
                    <Button className="login-button" variant="primary" onClick={() => {setShowLogin(true)}}>
                        Connexion
                    </Button>

                    <Modal show={showLogin} onHide={() => {setShowLogin(false)}}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connexion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
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
                                <div className="error-email">
                                    {errors.email}
                                </div>

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
                                <div className="error-password">
                                    {errors.password}
                                </div>
                                <Button variant="primary" type="submit" className="login-button-submit">
                                    Valider
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => {setShowLogin(false)}}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </div>
    );
};

LoginForm.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeUserField: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isLogged: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
    errors: PropTypes.objectOf(
        PropTypes.shape({
          email: PropTypes.string.isRequired,
          password: PropTypes.string.isRequired,
        }),
      ).isRequired,
    setErrors: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
};

export default LoginForm;
