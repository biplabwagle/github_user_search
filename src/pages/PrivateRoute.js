import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return isUser ? children : <Navigate to="/login" replace={true} />;
};
export default PrivateRoute;
