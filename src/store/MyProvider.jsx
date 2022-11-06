import React, { useContext, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import MyContext from "./MyContext";
import {useWindowSize} from "../utils/useWindowSize";
import loginReducer, { initState as loginInitState } from './loginReducer';


MyProvider.propTypes = {

};

function MyProvider(props) {
    let { width, height } = useWindowSize();
    let[isVisible, setVisible] = useState(false);
    let[loginState, loginDispatch] = useReducer(loginReducer, loginInitState);

    let store = {
        windowWidth: width,
        windowHeight: height,
        isVisible,
        setVisible,
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
