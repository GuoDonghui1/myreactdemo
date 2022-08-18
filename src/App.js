import './App.css';
import './assets/css/portal.css';
import SidePanel from "./components/SidePanel";
import appLogo from "./assets/images/app-logo.svg";
import React from "react";

const logoText = {
    marginLeft: '10px',
}

function App() {
    return (
        <SidePanel>
            {/* logo及名称 */}
            <div className="app-branding">
                <a className="app-logo" href="/">
                    <img className="logo-icon mr-2" src={appLogo} alt="logo"/>
                    <span className={'logo-text'} style={logoText}>我的应用</span>
                </a>
            </div>
            <p>这是一个大组件</p>
            <p style={{margin: '30px 60px 50px 40px', color: 'red', }}>这是另一个大组件</p>
        </SidePanel>
    );
}

export default App;
