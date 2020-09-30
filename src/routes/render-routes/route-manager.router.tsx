import React from 'react';
import { ROUTERS, PublicRoute } from '../index';
import { Switch } from 'react-router-dom';

const RouterManager: React.FC = () => {
  const mapRoutes = () => {
    return ROUTERS.map((route) =>
      route.isPublic ? (
        <PublicRoute component={route.component} path={route.path} />
      ) : (
        console.log('não')
      )
    );
  };
  return <Switch>{mapRoutes()}</Switch>;
};

export { RouterManager };
