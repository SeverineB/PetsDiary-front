import React from 'react';

import Header from './Header/Header';
import About from './About/About';
import Auth from '../../containers/Auth';

import './LoginPage.scss';

const LoginPage = () => (
  <div className="login-page">
    <Header />
    <div className="login-page-infos">
      <About />
      <Auth />
    </div>
  </div>
);

export default LoginPage;
