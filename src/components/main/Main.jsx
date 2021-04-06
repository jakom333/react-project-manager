import React, { Suspense } from 'react';
import { Switch } from 'react-router';
import mainRoutes from '../../routes/mainRoutes';
import PrivateRoute from '../routes/PrivateRoutes';
import PublicRoute from '../routes/PublicRoutes';
import Loader from '../loader/Loader';


const Main = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Switch>
          {mainRoutes.map(route =>
            route.private ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            ),
          )}
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
