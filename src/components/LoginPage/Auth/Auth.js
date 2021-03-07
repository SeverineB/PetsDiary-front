import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import LoginForm from '../../../containers/LoginForm';
import RegisterForm from '../../../containers/RegisterForm';

import HomeIcon from '../../../assets/icons/pet-house.png';

import './Auth.scss';

const Auth = ({
    checkIsLogged,
    isSignedUp,
    logout
}) => {
const handleLogout = () => {
    console.log('je me déconnecte');
    logout();
};
return (
    <div className="auth">
    {!checkIsLogged && (
        <>
        <LoginForm />
        <RegisterForm />
        </>
    )}
    {checkIsLogged && (
    <div className="logout">
        <button type="submit" className="logout-button" onClick={handleLogout}>Déconnexion</button>
    </div>
    )}
    {checkIsLogged && (
        <Redirect to="/pet" />
    )}
        {isSignedUp && (
            <div className="success-message">
                <div className="success-message-text">
                    <p><span>Le compte a bien été créé, vous pouvez vous connecter !</span></p>
                </div>
            </div>
        )}
    </div>
);
};

Auth.propTypes = {
    checkIsLogged: PropTypes.bool.isRequired,
    isSignedUp: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
};

export default Auth;
