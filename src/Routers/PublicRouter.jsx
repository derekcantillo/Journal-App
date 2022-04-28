import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect, Navigate } from 'react-router-dom';


export const PublicRoute = ({isAuth,  children }) => {
    return isAuth ? <Navigate to="/" /> : children;
};