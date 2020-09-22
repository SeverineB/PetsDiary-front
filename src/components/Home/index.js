/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Pets from '../../containers/Pets';
import AddPetForm from '../../containers/AddPetForm';

import './style.scss';

const Home = ({ fetchPets }) => {
  useEffect(fetchPets, []);
  return (
    <div className="home">
      <div className="pets-list">
        <Pets />
        {/*<AddPetForm />*/}
      </div>
    </div>
  );
};

Home.propTypes = {
  fetchPets: PropTypes.func.isRequired,
};

export default Home;
