import React from 'react';
import './style.scss';

import HeaderImg from '../../../assets/img/HeaderImg.jpg';

const Header = () => (
  <div className="loginPage-header">
    <div className="loginPage-header-title">
      <h1>Pets Notes</h1>
    </div>
    <img src={HeaderImg} alt="pets and people" />
  </div>
);

export default Header;
