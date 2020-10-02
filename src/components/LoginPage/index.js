import React from 'react';

import Header from './Header';
/* import LoginForm from '../../containers/LoginForm'; */
/* import RegisterForm from '../../containers/RegisterForm'; */
import Auth from '../../containers/Auth';

import './style.scss';

const LoginPage = () => (
  <div className="login-page">
    <Header />
    {/* <div className="login-page-forms"> */}
    <Auth />
    {/* <LoginForm /> */}
    {/* <RegisterForm /> */}
  </div>
  /* </div> */
);

LoginPage.propTypes = {
};

export default LoginPage;
