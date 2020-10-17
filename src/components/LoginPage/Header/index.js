import React from 'react';

import './header.scss';

import blobImg from '../../../assets/img/blob.svg';

const Header = () => (
  <div className="login-page-header">
    <div className="login-page-header-img" />
    <img src={blobImg} alt={blobImg} />
  </div>
);

export default Header;
