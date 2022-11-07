import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {useStore} from "../../store/MyProvider";
import {runInAction} from "mobx";
import { observer } from 'mobx-react';

SidePanelToggler.propTypes = {

};

function SidePanelToggler(props) {
    let { isVisible, visibleStore } = useStore();
    return (
        <div className="col-auto">
            <a id="sidepanel-toggler"
               className="sidepanel-toggler d-inline-block d-xl-none"
               href="#" onClick={ e => {
                   e.preventDefault();
                   runInAction( () => visibleStore.setPanelVisibility(!visibleStore.sidePanelVisible));
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

export default observer(SidePanelToggler);
