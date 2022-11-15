import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useStore} from "../store/MyProvider";

PrivateRoute.propTypes = {};

function PrivateRoute({children, ...rest}) {
    let { isLogin } = useStore().loginStore.loginState;
    return (
        <Route {...rest} render={ p => {
            return isLogin ? (children) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: p.location.pathname }
                    }}
                />
            )
        }}/>
    );
}
export default PrivateRoute;
