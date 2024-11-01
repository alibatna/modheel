// src/components/PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/CartContext'; // Create a context to handle auth state

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useAuth(); // Get authenticated user from context

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
