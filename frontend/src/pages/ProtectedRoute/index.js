import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import LogoutButton from '../../components/LogoutButton';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <>
      <LogoutButton />
      <Route
        {...rest}
        render={props =>
          token ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

export default ProtectedRoute;
