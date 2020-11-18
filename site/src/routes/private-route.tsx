import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PrivateRoute = ({ children, path }: RouteProps) => {
  const token = localStorage.getItem('@GoBarber:token');

  const checkToken = () => {
      if (!token) return <Redirect to="/" />
      
      return children
  }

  return <Route path={path} render={checkToken} />
}

export { PrivateRoute }
