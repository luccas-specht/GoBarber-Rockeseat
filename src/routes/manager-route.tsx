import React from 'react';
import { routers } from '../constants';
import { Switch, RouteProps } from 'react-router-dom';
import { PublicRoute } from './public-route.';

const Routes: React.FC<RouteProps> = () => (
  <Switch>
    <PublicRoute
      exact
      path={routers.defaultRoute.path}
      component={routers.defaultRoute.component}
    />
    <PublicRoute
      exact
      path={routers.login.path}
      component={routers.login.component}
    />
    <PublicRoute
      exact
      path={routers.register.path}
      component={routers.register.component}
    />
  </Switch>
);

export { Routes };
