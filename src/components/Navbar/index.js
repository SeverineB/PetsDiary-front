/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

import HomeIcon from '../../assets/icons/pet-house.png';

import './Navbar.scss';

const NavBar = ({ isLogged, logout }) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar bg="light" expand="lg" id="navbar-custom">
      <Navbar.Brand href="#home">Pets Diary</Navbar.Brand>
      {isLogged && (
        <>
          <div className="logout">
            <button type="submit" className="logout-button" onClick={handleLogout}>Déconnexion</button>
          </div>
          <Link to="/pets">Mes animaux</Link>
        </>
      )}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/"><img src={HomeIcon} alt="pets house" className="home-icon" />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavBar;
