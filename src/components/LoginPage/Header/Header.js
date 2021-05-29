import React from 'react';

import './header.scss';

import logo from '../../../assets/img/Logo-title.png';
import logo2 from '../../../assets/img/Logo-title-yellow.png';
import banner from '../../../assets/img/BannerPets2.jpg';

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
