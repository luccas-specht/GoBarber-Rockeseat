import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PrivateRoute = ({ component, path }: RouteProps) => {
  const token = localStorage.getItem('@GoBarber:token');
  
  if (!token) return <Redirect to="/" />
   
  return <Route path={path} component={component}/> 
};

export { PrivateRoute }
