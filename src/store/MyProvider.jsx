import React, { useContext, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import MyContext from "./MyContext";
import {useWindowSize} from "../utils/useWindowSize";
import loginReducer, { getInitState as getLoginInitState } from './loginReducer';
import visibleStore from './VisibleStore';

MyProvider.propTypes = {

};

function MyProvider(props) {
    let { width, height } = useWindowSize();
    let [loginState, loginDispatch] = useReducer(loginReducer, getLoginInitState());

    let store = {
        windowWidth: width,
        windowHeight: height,
        visibleStore,
        loginStore: {
            loginState,
            loginDispatch
        }
    }
    return (
        <MyContext.Provider value={store}>
            {props.children}
        </MyContext.Provider>
    );
}
export const useStore = () => {
    return useContext(MyContext);
}

export default MyProvider;
