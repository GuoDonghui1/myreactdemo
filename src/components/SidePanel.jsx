import React from 'react';
import appLogo from "../assets/images/app-logo.svg";

function SidePanel(props) {
    console.log(props.children);
    let renderChildren = children => {
        if (children === undefined) {
            return;
        }
        if (children instanceof Array) {
            return children.map(child => child);
        }
        return children;
    }
    return (
        <div id="app-sidepanel" className="app-sidepanel">
            <div id="sidepanel-drop" className="sidepanel-drop">

            </div>
            <div className="sidepanel-inner d-flex flex-column">
                <a href="#" id="sidepanel-close"
                   className="sidepanel-close d-xl-none">&times;
                </a>
                {renderChildren(props.children)}
            </div>
        </div>
    );
}

export default SidePanel;
