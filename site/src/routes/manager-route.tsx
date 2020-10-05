import React from 'react';
import { routers } from '../constants';
import { Switch, RouteProps } from 'react-router-dom';
import { PublicRoute } from './public-route.';

const Routes: React.FC<RouteProps> = () => {
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
    );
  };
  return <Switch>{mapRoutes()}</Switch>;
};

export { Routes };
