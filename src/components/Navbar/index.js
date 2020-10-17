/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

import HomeIcon from '../../assets/icons/pet-house.png';

import './Navbar.scss';

const NavBar = ({ checkIsLogged, logout }) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"><img src={HomeIcon} alt="pets house" className="home-icon" />
          </Nav.Link>
        </Nav>
        {checkIsLogged && (
        <div className="logout">
          <button type="submit" className="logout-button" onClick={handleLogout}>Déconnexion</button>
        </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  checkIsLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavBar;
