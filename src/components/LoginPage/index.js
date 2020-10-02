import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import About from './About';
import Auth from '../../containers/Auth';

import './LoginPage.scss';

const LoginPage = () => (
  <div className="login-page">
    <Header />
    <About />
    <Auth />
  </div>
);

LoginPage.propTypes = {
 
};

export default LoginPage;
