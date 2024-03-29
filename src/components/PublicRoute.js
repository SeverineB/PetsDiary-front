/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        !isLogged
          ? <Component {...props} />
          : <Redirect to="/pet" />
      )}
    />
  );
};

PublicRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export default connect(mapStateToProps)(PublicRoute);
