import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PublicRoute = ({ component: Component, path, exact, restricted }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  // const isAuthenticated = true;

  return !isAuthenticated && restricted ? (
    <Route
      path={path}
      exact={exact}
      render={props => <Component {...props} />}
    />
  ) : (
    <Redirect to='/projects' />
  );
};

export default PublicRoute;
