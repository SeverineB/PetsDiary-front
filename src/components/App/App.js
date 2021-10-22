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
/* import Footer from '../Footer/Footer'; */
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
      {/* <Footer /> */}
      <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.999 511.999" className="background-svg"><g>
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M111.278,64.419c10.964,17.295,13.243,45.318-0.56,53.676s-38.461-6.113-49.424-23.408   s-7.135-35.682,6.668-44.041S100.314,47.124,111.278,64.419z" fill="#7ed957" data-original="#af6e5a"/>
          <path d="M44.205,120.969c13.346,11.691,22.451,34.376,13.458,44.642   c-8.993,10.266-32.679,4.226-46.025-7.465s-15.016-27.863-6.023-38.129S30.859,109.278,44.205,120.969z" fill="#7ed957" data-original="#af6e5a"/>
          <path d="M227.671,83.286c-7.658,16.005-7.084,40.442,5.227,46.333s31.699-8.997,39.357-25.002   s2.818-31.526-9.493-37.416C250.45,61.311,235.328,67.281,227.671,83.286z" fill="#7ed957" data-original="#af6e5a"/>
          <path d="M242.305,192.207c-9.511-36.307-39.439-47.688-52.312-51.323   c-14.397-4.066-30.332-5.224-46.488-1.906c-47.915,9.841-79.289,54.181-71.908,90.117c7.381,35.936,47.752,35.401,95.668,25.56   C215.181,244.814,251.602,227.696,242.305,192.207z" fill="#7ed957" data-original="#af6e5a"/>
          <path d="M201.229,67.6c-3.311,20.208-20.242,42.654-36.109,39.719s-24.662-30.139-21.351-50.347   s18.397-31.396,34.264-28.461S204.54,47.392,201.229,67.6z" fill="#7ed957" data-original="#af6e5a"/>
        </g>
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M111.226,237.349c-9.056-31.07,0.566-69.672,23.24-96.041   c-42.749,13.199-69.774,54.166-62.868,87.787c5.014,24.413,25.274,31.969,52.76,31.236   C118.705,255.005,114.203,247.564,111.226,237.349z" fill="#7ed957" data-original="#965a50" />
          <path d="M22.284,140.993c-8.216-7.284-12.81-15.616-14.05-23.377c-0.904,0.755-1.822,1.491-2.619,2.402   c-8.993,10.266-7.323,26.438,6.022,38.129c13.346,11.691,37.033,17.731,46.025,7.465c1.95-2.226,2.908-5.107,3.298-8.261   C49.144,157.481,33.098,150.581,22.284,140.993z" fill="#7ed957" data-original="#965a50" />
          <path d="M79.409,84.845c-7.526-14.148-7.937-27.746-3.072-37.398c-2.898,0.639-5.737,1.602-8.375,3.199   c-13.802,8.358-17.631,26.746-6.667,44.041c10.963,17.295,35.621,31.766,49.424,23.408c0.477-0.289,0.788-0.77,1.227-1.105   C99.688,111.366,86.598,98.359,79.409,84.845z" fill="#7ed957" data-original="#965a50" />
          <path d="M161.505,61.914c5.444-15.335,15.859-25.202,27.585-28.663c-3.246-2.335-6.966-3.984-11.056-4.741   c-15.867-2.935-30.953,8.253-34.264,28.461c-2.886,17.614,3.43,40.531,15.604,48.071C156.112,91.5,156.835,75.067,161.505,61.914z" fill="#7ed957" data-original="#965a50" />
          <path d="M243.643,91.037c9.018-9.581,19.842-13.777,29.73-13.162c-2.235-4.64-5.842-8.392-10.611-10.673   c-12.312-5.89-27.433,0.08-35.091,16.085c-6.186,12.928-6.872,31.201-0.468,40.914C229.108,112.582,235.367,99.829,243.643,91.037z   " fill="#7ed957" data-original="#965a50" />
        </g>
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M384.511,279.84c-0.512,20.471-14.207,45.025-30.327,44.291   c-16.119-0.733-28.558-26.476-28.047-46.947s13.922-33.62,30.042-32.887C372.299,245.031,385.023,259.369,384.511,279.84z" fill="#7ed957" data-original="#af6e5a"/>
          <path d="M297.315,289.516c4.586,17.14-0.468,41.055-13.653,44.583   c-13.184,3.528-29.506-14.669-34.092-31.808c-4.586-17.14,3.023-31.507,16.208-35.034   C278.963,263.729,292.73,272.376,297.315,289.516z" fill="#7ed957" data-original="#af6e5a"/>
          <path d="M470.732,360.272c-15.267,9.039-28.386,29.665-21.433,41.409c6.953,11.744,31.346,10.16,46.613,1.12   s19.88-24.629,12.927-36.373C501.886,354.684,485.999,351.232,470.732,360.272z" fill="#7ed957" data-original="#af6e5a"/>
          <path d="M422.297,458.922c12.295-35.46-6.242-61.568-14.916-71.75   c-9.701-11.389-22.299-21.216-37.569-27.446c-45.29-18.479-96.029,0.911-109.888,34.879c-13.86,33.968,19.985,55.983,65.276,74.462   C370.491,487.546,410.278,493.585,422.297,458.922z" fill="#7ed957" data-original="#af6e5a"/>
          <path d="M457.487,332.526c-13.994,14.95-40.55,24.183-52.102,12.916   c-11.552-11.266-3.726-38.765,10.268-53.714s32.754-15.854,44.306-4.588C471.511,298.407,471.481,317.577,457.487,332.526z" fill="#7ed957" data-original="#af6e5a"/>
        </g>
        <g xmlns="http://www.w3.org/2000/svg">
          <path d="M288.261,423.509c9.76-30.856,39.231-57.58,72.742-66.877   c-42.865-12.815-88.113,6.192-101.079,37.972c-9.415,23.075,3.216,40.626,26.464,55.308   C284.653,442.341,285.052,433.654,288.261,423.509z" fill="#7ed957" data-original="#965a50" />
          <path d="M267.96,293.96c-2.775-10.624-1.957-20.103,1.33-27.242c-1.171,0.124-2.343,0.226-3.512,0.539   c-13.184,3.527-20.794,17.894-16.208,35.034s20.908,35.336,34.092,31.808c2.859-0.765,5.257-2.626,7.336-5.03   C281.107,322.604,271.613,307.944,267.96,293.96z" fill="#7ed957" data-original="#965a50" />
          <path d="M346.665,279.084c1.617-15.944,8.841-27.471,18.253-32.785c-2.764-1.082-5.659-1.861-8.739-2.001   c-16.119-0.733-29.53,12.416-30.042,32.887s11.927,46.214,28.047,46.947c0.557,0.025,1.083-0.202,1.634-0.236   C348.762,312.404,345.121,294.313,346.665,279.084z" fill="#7ed957" data-original="#965a50" />
          <path d="M427.641,305.702c13.055-9.714,27.199-12.119,38.868-8.471c-1.398-3.746-3.572-7.186-6.55-10.09   c-11.552-11.266-30.312-10.362-44.306,4.587c-12.197,13.03-19.699,35.587-13.777,48.626   C406.701,327.286,416.444,314.034,427.641,305.702z" fill="#7ed957" data-original="#965a50" />
          <path d="M479.692,375.598c12.824-2.944,24.153-0.409,32.027,5.603c0.725-5.099-0.186-10.223-2.88-14.773   c-6.953-11.744-22.84-15.195-38.108-6.156c-12.332,7.301-23.068,22.104-23.151,33.738   C455.628,385.415,467.924,378.3,479.692,375.598z" fill="#7ed957" data-original="#965a50" />
        </g>
        </g></svg>
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
