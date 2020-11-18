import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

const PublicRoute =({ children, path }: RouteProps) => {
   const token = localStorage.getItem('@GoBarber:token');
 
   const checkToken = () => {
       if (token) return <Redirect to="/dashboard" />
       
       return children
   }
 
   return <Route path={path} render={checkToken} />
 }
 
export { PublicRoute };