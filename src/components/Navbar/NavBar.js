/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

import LogoText from '../../assets/images/banner-pets-text.svg';

import './Navbar.scss';

const NavBar = ({ isLogged, logout }) => {
  const handleLogout = () => {
    logout();
    window.location.reload(false);
  };
    return (
        <Navbar bg="light" expand="lg" id="navbar-custom">
        <Navbar.Brand href="#pet">
            {isLogged && (
                <LogoText className="logo-small"/>
            )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
            <Nav className="mr-auto">
            {!isLogged && (
                <>
                <Link to="/pet">Accueil</Link>
                </>
            )}
            {isLogged && (
                <>
                <Link to="/pet">Home</Link>
                <Link to="/event">Mes rendez-vous</Link>
                <Link to="/logout" onClick={handleLogout}>Déconnexion</Link>
                </>
            )}
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
