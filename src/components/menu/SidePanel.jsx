import React, {useEffect, useState} from 'react';
import { useStore } from '../../store/MyProvider';
import appLogo from "../../assets/images/app-logo.svg";
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';
import {useDispatch} from "react-redux";
import { sidePanelLoadingState } from '../../store/LoadingSlice';
function SidePanel(props) {
    //console.log(props.children);
    /*let renderChildren = children => {
        if (children === undefined) {
            return;
        }
        if (children instanceof Array) {
            return children.map(child => child);
        }
        return children;
    }*/
    let { visibleStore } = useStore();
    return (
        <div id="app-sidepanel"
             className={`app-sidepanel ${visibleStore.sidePanelVisible ? 'sidepanel-visible' : 'sidepanel-hidden'}`}>
            <div id="sidepanel-drop" className="sidepanel-drop" >

            </div>
            <div className="sidepanel-inner d-flex flex-column">
                <a onClick={e => {
                        e.preventDefault();
                        runInAction( () => visibleStore.setPanelVisibility(false));
                    }
                }
                   href="#" id="sidepanel-close"
                   className="sidepanel-close d-xl-none">&times;
                </a>
                {props.children}
            </div>
        </div>
    );
}

export default observer(SidePanel);
