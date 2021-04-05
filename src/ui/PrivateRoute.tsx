import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
  const { isAuthenticated, gotValidToken } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated || gotValidToken() ? children : <Redirect to={{ pathname: '/' }} />;
      }}
    />
  );
};

export default PrivateRoute;
