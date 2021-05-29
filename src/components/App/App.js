/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import Home from '../../containers/Home';
import Calendar from '../../containers/Calendar';
import AddPetForm from '../../containers/AddPetForm';
import AddEventForm from '../../containers/AddEventForm';
import PetDetails from '../../containers/PetDetails';
import WeightDetails from '../../containers/WeightDetails';
import VaccineDetails from '../../containers/VaccineDetails';
import DewormingDetails from '../../containers/DewormingDetails';
import AntifleaDetails from '../../containers/AntifleaDetails';
import EditPetForm from '../../containers/EditPetForm';
import NavBar from '../../containers/NavBar';
import LoginPage from '../LoginPage/LoginPage';

import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../../ErrorBoundary';

import 'bootstrap/dist/css/bootstrap.min.css';

import './app.scss';

// == Composant

const App = ({ check }) => {
  useEffect(() => {
    check();
  }, []);

  return (
    <div className="app">
      <NavBar />
      <ErrorBoundary>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/pet" component={Home} />
        <PrivateRoute exact path="/event" component={Calendar} />
        <PrivateRoute exact path="/event/add" component={AddEventForm} />
        <PrivateRoute exact path="/pet/add" component={AddPetForm} />
        <PrivateRoute exact path="/pet/:petId" component={PetDetails} />
        <PrivateRoute exact path="/pet/:petId/weight" component={WeightDetails} />
        <PrivateRoute exact path="/pet/:petId/vaccine" component={VaccineDetails} />
        <PrivateRoute exact path="/pet/:petId/deworming" component={DewormingDetails} />
        <PrivateRoute exact path="/pet/:petId/antiflea" component={AntifleaDetails} />
        <PrivateRoute exact path="/pet/edit/:petId" component={EditPetForm} />
      </Switch>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool,
  check: PropTypes.func.isRequired,
};

App.defaultProps = {
    isLogged: false,
}

// == Export

export default App;
