import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  // const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Route {...routeProps} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/registration" />
  );
};

export default PrivateRoute;
