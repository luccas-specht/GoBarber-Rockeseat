import React from 'react';
import { ROUTERS } from './paths';
import { Switch, RouteProps } from 'react-router-dom';
import { PublicRoute } from './render-routes/public-route.route';

const Routes: React.FC<RouteProps> = () => (
  <Switch>
    <PublicRoute
      exact
      path={ROUTERS.defaultRoute.path()}
      component={ROUTERS.defaultRoute.component}
    />
    <PublicRoute
      exact
      path={ROUTERS.login.path()}
      component={ROUTERS.login.component}
    />
    <PublicRoute
      exact
      path={ROUTERS.register.path()}
      component={ROUTERS.register.component}
    />
  </Switch>
);

export { Routes };
