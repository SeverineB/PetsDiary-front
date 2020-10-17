/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Pets from '../../containers/Pets';
import AddPetForm from '../../containers/AddPetForm';

import './home.scss';

const Home = ({
  getPetsList,
  loggedOut,
}) => {
  useEffect(getPetsList, []);

  console.log('loggedOut dans component Home vaut ', loggedOut);
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
        {loggedOut && (
        <Redirect to="/" />
        )}
      </div>
    </>
  );
};

Home.propTypes = {
  getPetsList: PropTypes.func.isRequired,
  loggedOut: PropTypes.bool.isRequired,
};

export default Home;
