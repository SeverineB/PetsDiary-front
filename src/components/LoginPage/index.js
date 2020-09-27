import React from 'react';

import Header from './Header';
import LoginForm from '../../containers/LoginPage/LoginForm';
import RegisterForm from '../../containers/LoginPage/RegisterForm';

const LoginPage = () => (
  <div className="login-page">
    <Header />
    <div className="login-page-forms">
      <LoginForm />
      <RegisterForm />
    </div>
  </div>
);

LoginPage.propTypes = {
};

export default LoginPage;
