import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = ({ children, path }) => {
  const isToken = localStorage.getItem('@token');

  const checkToken = () => {
    if (!isToken) {
      return <Redirect to='/' />;
    }
    return children;
  };

  return <Route path={path} render={checkToken} />;
};

export { PrivateRoute };
