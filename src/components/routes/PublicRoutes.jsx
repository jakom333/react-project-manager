import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  // const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const isAuthenticated = true;

  return !isAuthenticated && routeProps.restricted ? (
    <Route {...routeProps} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/projects" />
  );
};

export default PublicRoute;
