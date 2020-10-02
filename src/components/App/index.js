// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../containers/Home';
import LoginPage from '../LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

// == Import
import './app.scss';


// == Composant
const App = ({ checkIsLogged, check }) => {
  useEffect(() => {
    check();
  }, []);
  console.log('dans app checkIsLogged vaut ', checkIsLogged);
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  checkIsLogged: PropTypes.bool.isRequired,
  check: PropTypes.func.isRequired,
};

// == Export
export default App;
