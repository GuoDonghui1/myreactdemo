import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

PrivateRoute.propTypes = {};

function PrivateRoute({pathname, children, ...rest}) {
    let isLogin = false;
    return (
        <Route {...rest} render={p => {
            console.log(p);
            return isLogin ? (children) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: pathname}
                    }}
                />
            )
        }}/>
    );
}
export default PrivateRoute;
