import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

const PublicRoute =({ component, path }: RouteProps) => {
  const token = localStorage.getItem('@GoBarber:token');

  if (token) return <Redirect to="/dashboard" />
      
  return <Route path={path} component={component}/>
};
 
export { PublicRoute };