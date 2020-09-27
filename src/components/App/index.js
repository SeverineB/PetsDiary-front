// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../containers/Home';
import LoginPage from '../LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

// == Import
import './style.scss';


// == Composant
const App = () => (
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

// == Export
export default App;
