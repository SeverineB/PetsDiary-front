/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';

import './RegisterForm.scss';

const RegisterForm = ({
    email,
    password,
    username,
    changeUserFieldRegister,
    registerUser,
    isSignedUp,
    isFailed,
    isLoading,
    error,
    errors,
    setErrors
}) => {
    const [showRegister, setShowRegister] = useState(false);

    // Check data before submit form

    const checkUsername = (value) => {
        if (value.length < 1) {
            setErrors('username', 'Un nom d\'utilisateur doit être renseigné');
        }
        else if (value.length > 0 && value.length < 4) {
            setErrors('username', 'Le nom d\'utilisateur doit contenir au moins 4 caractères');
        }
        else if (value.length > 30) {
            setErrors('username', 'Le nom d\'utilisateur doit contenir au maximum 30 caractères');
        }
        else {
            setErrors('username', '');
        }
        return true;
    };

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
        changeUserFieldRegister(evt.target.value, evt.target.name);
        switch (evt.target.name) {
            case 'username':
              checkUsername(evt.target.value);
              break;
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
        if (checkUsername && checkEmail && checkPassword) {
            registerUser();
        }
    };

    return (
        <div className="modal-register-form">
            {!isSignedUp && !isLoading && (
                <>
                    <Button className="login-button" variant="primary" onClick={() => {setShowRegister(true)}}>
                        Inscription
                    </Button>

                    <Modal show={showRegister} onHide={() => {setShowRegister(false)}}>
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
                                <div className="error-register-username">
                                    <p>{errors.username}</p>
                                </div>

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
                                <div className="error-register-email">
                                    <p>{errors.email}</p>
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
                                <div className="error-register-password">
                                    <p>{errors.password}</p>
                                </div>
                                <Button variant="primary" type="submit">
                                    Valider
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => {setShowRegister(false)}}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </div>
    );
};

RegisterForm.propTypes = {
email: PropTypes.string.isRequired,
password: PropTypes.string.isRequired,
username: PropTypes.string.isRequired,
changeUserFieldRegister: PropTypes.func.isRequired,
registerUser: PropTypes.func.isRequired,
isLoading: PropTypes.bool.isRequired,
isSignedUp: PropTypes.bool.isRequired,
isFailed: PropTypes.bool.isRequired,
setErrors: PropTypes.func.isRequired,
clearErrors: PropTypes.func.isRequired,
errors: PropTypes.objectOf(
    PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    }),
).isRequired,
error: PropTypes.objectOf(
    PropTypes.shape({
    message: PropTypes.string.isRequired,
    }),
).isRequired,
};

export default RegisterForm;
