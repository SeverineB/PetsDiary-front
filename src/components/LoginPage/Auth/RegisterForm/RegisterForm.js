/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';

import './RegisterForm.scss';

import PawIcon from '../../../../../src/assets/img/paw.png';

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

                    <Modal className="modal-register-content-custom" show={showRegister} onHide={() => {setShowRegister(false)}}>
                        <Modal.Header closeButton>
                            <Modal.Title className="modal-register-form-title">
                                Inscription
                                <img src={PawIcon} alt="paw coral" className="login-form-icon" />
                                </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {!isSignedUp && isFailed && (
                            <p className="error-register">
                                {error}
                            </p>
                        )}
                            <Form onSubmit={handleSubmit} className="register-form">
                                {/* <Form.Group controlId="formBasicUsername">
                                <Form.Label>Nom d'utilisateur</Form.Label>
                                <Form.Control
                                    type="username"
                                    placeholder="Votre nom d'utilisateur"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                                </Form.Group> */}
                                <label htmlFor="username">Votre nom d'utilisateur</label>
                                <input
                                    className="input-username"
                                    type="username"
                                    placeholder="Votre nom d'utilisateur"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                                {errors.username ? (
                                <div className="error-register-username">
                                    <p>{errors.username}</p>
                                </div>
                                ) : ''}
                                <label htmlFor="email">Votre email</label>
                                <input
                                    className="input-email"
                                    type="email"
                                    placeholder="Votre email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                                <div className="error-register-email">
                                    <p>{errors.email}</p>
                                </div>
                                <label htmlFor="password">Votre password</label>
                                <input
                                    className="input-password"
                                    type="password"
                                    placeholder="Votre mot de passe"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                                <div className="error-register-password">
                                    <p>{errors.password}</p>
                                </div>
                                <div className="register-form-btn">
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
                                </div>
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
