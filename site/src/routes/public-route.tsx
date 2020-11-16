import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const PublicRoute = ({ path, component }: RouteProps) => (
   <Route path={path} component={component} /> 
);

export { PublicRoute };
