/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pets from '../../containers/Pets';
import AddPetForm from '../../containers/AddPetForm';

import './home.scss';

const Home = ({ getPetsList, checkIsLogged, logout }) => {
  useEffect(getPetsList, []);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className="home">
        <div className="pets-list">
          <Link to="/pets">Mes animaux</Link>
          <Switch>
            <Route path="/pets" exact>
              <Pets />
              <AddPetForm />
            </Route>
          </Switch>
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
