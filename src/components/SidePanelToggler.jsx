import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {useStore} from "../store/MyProvider";

SidePanelToggler.propTypes = {

};

function SidePanelToggler(props) {
    let { isVisible, setVisible } = useStore();
    return (
        <div className="col-auto">
            <a id="sidepanel-toggler"
               className="sidepanel-toggler d-inline-block d-xl-none"
               href="#" onClick={ e => {
                   e.preventDefault();
                   setVisible(!isVisible);
               }
            } >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                     role="img">
                    <title>Menu</title>
                    <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10"
                          strokeWidth="2"
                          d="M4 7h22M4 15h22M4 23h22"/>
                </svg>
            </a>
        </div>
    );
}

export default SidePanelToggler;
