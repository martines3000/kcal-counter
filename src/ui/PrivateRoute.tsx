import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? children : <Redirect to={{ pathname: '/' }} />;
      }}
    />
  );
};

export default PrivateRoute;
