import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import mainRoutes from '../../routes/mainRoutes';
import PrivateRoute from '../routes/PrivateRoutes';
import PublicRoute from '../routes/PublicRoutes';

const Main = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {mainRoutes.map(
            route =>
              route.private ? (
                <PrivateRoute {...route} key={route.path} />
              ) : (
                <PublicRoute {...route} key={route.path} />
              ),
            // <Route key={path} path={path} exact={exact} component={component} />
          )}
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
