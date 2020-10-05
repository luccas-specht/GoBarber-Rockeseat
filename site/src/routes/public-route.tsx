import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const PublicRoute: React.FC<RouteProps> = ({ path, component }) => {
  return <Route path={path} component={component} />;
};

export { PublicRoute };
