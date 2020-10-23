/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Home from '../../containers/Home';
/* import Pets from '../../containers/Pets'; */
import Appointments from '../Home/Appointments/appointments';
import NavBar from '../../containers/NavBar';
import LoginPage from '../LoginPage';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Footer from '../Footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import './app.scss';

// == Composant

const App = ({ isLogged, check }) => {
  useEffect(() => {
    console.log('je check si le user est bien connecté');
    check();
  }, []);
  console.log('dans app checkIsLogged vaut ', isLogged);
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/home" component={Home} />
        {/* <PrivateRoute exact path="/pets" component={Pets} /> */}
        <PrivateRoute exact path="/appointments" component={Appointments} />
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  check: PropTypes.func.isRequired,
};

// == Export

export default App;
