import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, path, exact }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return isAuthenticated ? (
    <Route
      path={path}
      exact={exact}
      render={props => <Component {...props} />}
    />
  ) : (
    <Redirect to="/registration" />
  );
};

export default PrivateRoute;
