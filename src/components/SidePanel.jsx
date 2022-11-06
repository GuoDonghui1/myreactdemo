import React, { useState } from 'react';
import { useStore } from '../store/MyProvider';
import appLogo from "../assets/images/app-logo.svg";

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

    let { windowWidth, isVisible, setVisible } = useStore();
    return (
        <div id="app-sidepanel"
             className={`app-sidepanel ${windowWidth >= 1200 || isVisible ? 'sidepanel-visible' : 'sidepanel-hidden'}`}>
            <div id="sidepanel-drop" className="sidepanel-drop" >

            </div>
            <div className="sidepanel-inner d-flex flex-column">
                <a onClick={e =>{
                        e.preventDefault();
                        setVisible(false);
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

export default SidePanel;
