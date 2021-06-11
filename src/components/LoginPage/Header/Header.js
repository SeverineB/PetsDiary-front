import React from 'react';

import './header.scss';

import logo2 from '../../../assets/images/Logo-title-yellow.png';
import banner from '../../../assets/images/banner-home.jpg';

const Header = () => (
  <div className="login-page-header">
    <div className="login-page-header-title">
        <img src={logo2} alt="banner text" />
    </div>
    <div className="login-page-header-img">
        <img src={banner} alt="cat and dog in badge" />
    </div>

  </div>
);

export default Header;
