import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return (
            <div className="my-32">
                <div class=" flex justify-center items-center">
                    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                    children :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    ></Redirect>
            }
        >


        </Route>
    );
};

export default PrivateRoute;