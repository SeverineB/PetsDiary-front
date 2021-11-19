import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import LoginForm from '../../../containers/LoginForm';
import RegisterForm from '../../../containers/RegisterForm';

import HomeIcon from '../../../assets/icons/pet-house.png';

import './auth.scss';

const Auth = ({
    checkIsLogged,
    isSignedUp,
    isFailed,
    logout
}) => {
const handleLogout = () => {
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

        {isSignedUp && !isFailed && (
            <div className="success-message">
                <div className="success-message-text">
                    <p><span>Le compte a bien été créé, vous pouvez vous connecter !</span></p>
                </div>
            </div>
        )}
        {isFailed && !isSignedUp && (
            <div className="success-message">
                <div className="success-message-text">
                    <p><span>Il y a eu un souci lors de l'enregistrement, merci de renseigner de nouveau le formulaire !</span></p>
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
 