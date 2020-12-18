/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
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
    setErrors, clearErrors
}) => {
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        clearErrors();
        }, []);

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
        const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (value.length < 1) {
            setErrors('email', 'L\'email doit être renseigné');
        }
        else if (!emailPattern.test(value)) {
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

    console.log('errors ', errors)
    console.log('errors username', errors.username)

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
                    <Button className="register-button" variant="primary" onClick={() => {setShowRegister(true)}}>
                        Inscription
                    </Button>

                    <Modal show={showRegister} onHide={() => {setShowRegister(false)}}>
                        <Modal.Header closeButton>
                            <Modal.Title className="modal-register-form-title">Inscription</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {!isSignedUp && isFailed && (
                            <p className="error-register">
                                {error}
                            </p>
                        )}
                            <Form onSubmit={handleSubmit} className="register-form">
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

                                {errors.username ? (
                                <div className="error-register-username">
                                    <p>{errors.username}</p>
                                </div>
                                ) : ''}

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
                                <Button
                                    className="register-button-submit"
                                    variant="primary"
                                    type="submit">
                                    Valider
                                </Button>
                                <Button
                                    className="register-button-cancel"
                                    variant="secondary"
                                    onClick={() => {setShowRegister(false)}}
                                >
                                    Annuler
                                </Button>
                            </Form>
                        </Modal.Body>
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
    errors: PropTypes.objectOf(PropTypes.string),
};

export default RegisterForm;
