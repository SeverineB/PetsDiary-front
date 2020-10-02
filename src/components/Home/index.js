/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pets from '../../containers/Pets';
import AddPetForm from '../../containers/AddPetForm';

import './home.scss';

const Home = ({ getPetsList }) => {
  useEffect(getPetsList, []);
  return (
    <>
      <Link to="/">Retour à l'accueil</Link>
      <div className="home">
        <div className="pets-list">
          <Pets />
          <AddPetForm />
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  getPetsList: PropTypes.func.isRequired,
};

export default Home;
