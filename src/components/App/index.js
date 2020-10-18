/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Home from '../../containers/Home';
import NavBar from '../../containers/NavBar';
import LoginPage from '../LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import './app.scss';

// == Composant

const App = ({ isLogged, check }) => {
  useEffect(() => {
    check();
  }, []);
  console.log('dans app checkIsLogged vaut ', isLogged);
  return (
    <div className="app">
      <NavBar />
      <div className="login-page-header-title">
        <h1>Pets Notes</h1>
      </div>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/home" exact>
          {isLogged && (
          <Home />
          )}
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  // loggedOut: PropTypes.bool.isRequired,
  check: PropTypes.func.isRequired,
};

// == Export

export default App;
