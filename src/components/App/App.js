/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import Home from '../../containers/Home';
import Appointments from '../Home/Appointments/Appointments';
import AddPetForm from '../../containers/AddPetForm';
import PetDetails from '../../containers/PetDetails';
import EditPetForm from '../../containers/EditPetForm';
import NavBar from '../../containers/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Footer from '../Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import './app.scss';

// == Composant

const App = ({ isLogged, check, getPetsList }) => {
  useEffect(() => {
    console.log('je check si le user est bien connecté');
    check();
    getPetsList();
  }, []);

  console.log('dans app checkIsLogged vaut ', isLogged);
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/add" component={AddPetForm} />
        <PrivateRoute exact path="/appointments" component={Appointments} />
        <PrivateRoute exact path="/pet/:petId" component={PetDetails} />
        <PrivateRoute exact path="/pet/edit/:petId" component={EditPetForm} />
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  getPetsList: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  check: PropTypes.func.isRequired,
};

// == Export

export default App;
