/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Form } from 'react-bootstrap'

import './LoginForm.scss'

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
    const [showLogin, setShowLogin] = useState(false)

    useEffect(() => {
        clearErrors();
        }, [])

    const checkEmail = (value) => {
        const emailPattern = new RegExp(/^[_a-z0-9-+]+(\.[_a-z0-9-+]+)*(\+[a-z0-9-]+)?@[a-z0-9-.]+(\.[a-z0-9]+)$/);
        if (value.length < 1) {
            setErrors('email', 'L\'email doit être renseigné')
        }
        else if (value.length > 1 && !emailPattern.test(value)) {
            setErrors('email', 'Le format de l\'email n\'est pas valide')
        }
        else {
            setErrors('email', '')
        }
        return true
    };

    const checkPassword = (value) => {
        if (value.length < 1) {
            setErrors('password', 'Le mot de passe doit être renseigné')
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
            <Button className="login-button" variant="primary" onClick={() => {setShowLogin(true)}}>
                Connexion
            </Button>
            {!isLogged && (
                <>
                    <Modal className="modal-login-content-custom"show={showLogin} onHide={() => {setShowLogin(false)}}>
                        <Modal.Header closeButton>
                            <Modal.Title className="modal-login-form-title">
                                Connexion
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {!isLogged && isFailed && (
                            <p className="error-login">
                                {error}
                            </p>
                        )}
                            <Form onSubmit={handleSubmit} className="login-form">
                                <label htmlFor="username">Votre email</label>
                                <input
                                    className="input-email"
                                    type="username"
                                    placeholder="Votre email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                                <div className="error-email">
                                    {errors.email}
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
                                <div className="error-password">
                                    {errors.password}
                                </div>
                                <div className="login-form-btn">
                                    <Button
                                        className="login-button-submit"
                                        variant="primary"
                                        type="submit"
                                    >
                                        Valider
                                    </Button>
                                    <Button
                                        className="login-button-cancel"
                                        variant="secondary"
                                        onClick={() => {setShowLogin(false)}}
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

LoginForm.propTypes = {
    /* email: PropTypes.string.isRequired, */
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeUserField: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isLogged: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
    errors: PropTypes.objectOf(PropTypes.string),
    setErrors: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
};

export default LoginForm;
