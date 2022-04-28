import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect, Navigate } from 'react-router-dom';


export const PrivateRoute = ({isAuth, children}) => {
    return isAuth ? children : <Navigate to="/auth/login" />;
}