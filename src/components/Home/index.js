/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pets from '../../containers/Pets';
import AddPetForm from '../../containers/AddPetForm';
import NavBar from '../Navbar';

import HomeIcon from '../../assets/icons/pet-house.png';

import './home.scss';

const Home = ({ getPetsList, checkIsLogged, logout }) => {
  useEffect(getPetsList, []);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <NavBar />
      <Link to="/">
        <img src={HomeIcon} alt="pets house" className="home-icon" />
      </Link>
      <div className="home">
        <div className="pets-list">
          <Pets />
          <AddPetForm />
        </div>
        {checkIsLogged && (
          <div className="logout">
            <button type="submit" className="logout-button" onClick={handleLogout}>Déconnexion</button>
          </div>
        )}
      </div>
    </>
  );
};

Home.propTypes = {
  getPetsList: PropTypes.func.isRequired,
  checkIsLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Home;
