import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../../containers/LoginForm';
import RegisterForm from '../../../containers/RegisterForm';

import './auth.scss';

const Auth = ({ checkIsLogged, logout }) => {
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
          {/* <div className="auth-register">
            <p className="auth-register-meta">Pas encore de compte ?</p>
            <button type="button" className="auth-register-button" onClick={showRegister}>Inscription</button>
          </div> */}
        </>
      )}
      {/* {checkIsLogged && (
        { <Link to="/home">Vos animaux</Link> }
      )} */}
      {checkIsLogged && (
      <div className="logout">
        <button type="submit" className="logout-button" onClick={handleLogout}>Déconnexion</button>
      </div>
      )}
    </div>
  );
};

Auth.propTypes = {
  checkIsLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Auth;
