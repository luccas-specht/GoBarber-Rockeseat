import React from 'react';
import { Switch, RouteProps } from 'react-router-dom';

import { routers } from '../constants';
import { PublicRoute } from './public-route';

const RouteManger: React.FC<RouteProps> = () => {
  const mapRoutes = () => {
    return routers.map(
      (route, key) =>
        route.isPublic && (
          <PublicRoute
            exact
            key={key}
            path={route.path}
            component={route.component}
          />
        )
    )
  };
  return <Switch>{mapRoutes()}</Switch>;
};

export { RouteManger };
