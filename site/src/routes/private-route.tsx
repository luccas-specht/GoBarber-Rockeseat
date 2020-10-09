import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../hooks'

const {authentication} = useAuth();

const PrivateRoute = async({ children, path }: RouteProps) => {
  const response = await authentication('pedro@', '123')
  
  const checkToken = () => {
    if (!response.status) {
      return <Redirect to='/' />;
    }
    return children;
  };

  return <Route path={path} render={checkToken} />;
};

export { PrivateRoute };
