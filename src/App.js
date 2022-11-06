import './App.css';
import './assets/css/portal.css';
import SidePanel from "./components/SidePanel";
import appLogo from "./assets/images/app-logo.svg";
import React, { createRef,useEffect } from "react";
import Nav from "./components/Nav";
import * as icons from './utils/IconData';
import userProfile from './assets/images/user.png';
import 'font-awesome/css/font-awesome.min.css';
import MyProvider from "./store/MyProvider";
import TopBar from "./components/TopBar";
import SidePanelToggler from "./components/SidePanelToggler";
import {Collapse} from "bootstrap"; // 确保点击折叠展开的部分正常
import SearchBox from "./components/SearchBox";
import TopBarUtilities from "./components/TopBarUtilities";
import SidePanelFooter from "./components/SidePanelFooter";
import Home from "./components/home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Me from "./components/me/Me";
import News from "./components/news/News";
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
const logoText = {
    marginLeft: '10px',
}
const menu = [
    {
        menuId: 1,
        title: '首页',
        icon: icons['home'],
        active: true,
        url: '/home',
    },
    {
        menuId: 2,
        title: '资讯',
        icon: icons['list'],
        url: '/news',
    },
    {
        menuId: 3,
        title: '我的',
        icon: icons['license'],
        url: '/me',
    },
    {
        menuId: 4,
        subMenuId: 'moreOptions',
        title: '更多',
        icon: icons['application'],
        children: [
            {
                menuId: 4001,
                title: '建议反馈',
                url: '/me/feedback',

            },
            {
                menuId: 4002,
                title: '关于',
                active: true,
                url: '/me/about',
            },
        ],
    },
    {
        menuId: 5,
        subMenuId: 'test',
        title: '测试',
        icon: icons['pages'],
        children: [
            {
                menuId: 5001,
                title: '测试1',
                url: '/more/test1',

            },
            {
                active: true,
                menuId: 5002,
                title: '测试2',
                url: '/more/test2',
            },
        ],
    },
]
function App() {
    useEffect(() => {
        // 将类添加到 body 元素
        document.body.classList.add('app');


        return () => {
            // 当组件卸载时从 body 元素中删除类
            document.body.classList.remove('app');
        }
    }, []);
    return (
        <Router>
            <MyProvider>
                <header className="app-header fixed-top">
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
                        <Nav menu={menu}/>
                        <SidePanelFooter/>
                    </SidePanel>
                </header>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={{pathname:'/home'}}/>}/>
                    <Route path={'/home'} render={() => <Home/> }/>
                    <Route path={'/news'} render={() => <News/> }/>
                    {/*<Route path={'/me'} render={() => <Me/>}/>*/}
                    <PrivateRoute pathname={'/me'} >
                        <Me/>
                    </PrivateRoute>
                </Switch>
            </MyProvider>

        </Router>
        /*<Login/>*/
    );
}

export default App;
