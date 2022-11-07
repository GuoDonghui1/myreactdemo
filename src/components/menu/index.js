import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TopBar from "./TopBar";
import SidePanelToggler from "./SidePanelToggler";
import SearchBox from "./SearchBox";
import TopBarUtilities from "./TopBarUtilities";
import SidePanel from "./SidePanel";
import appLogo from "../../assets/images/app-logo.svg";
import Nav from "./Nav";
import SidePanelFooter from "./SidePanelFooter";
import {useStore} from "../../store/MyProvider";
import { useLocation } from 'react-router-dom';
Header.propTypes = {

};

const logoText = {
    marginLeft: '10px',
}

function Header(props) {
    let urlPath = useLocation();
    let { windowWidth, loginStore, visibleStore } = useStore();
    useEffect(() => {
        visibleStore.resetAllVisibility();
    },[windowWidth, urlPath]);

    return !loginStore.loginState.doingLogin ?
        (<header className="app-header fixed-top">
            <TopBar>
                <SidePanelToggler/>
                <SearchBox/>
                <TopBarUtilities/>
            </TopBar>
            <SidePanel>
                {/* logo及名称 */}
                <div className="app-branding">
                    <a className="app-logo" href="/">
                        <img className="logo-icon mr-2" src={appLogo} alt="logo"/>
                        <span className={'logo-text'} style={logoText}>Application</span>
                    </a>
                </div>
                <Nav menu={props.menu}/>
                <SidePanelFooter/>
            </SidePanel>
        </header>
    ) : null;
}

export default Header;
