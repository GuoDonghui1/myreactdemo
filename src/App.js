import './App.css';
import './assets/css/portal.css';
import React, {useState, useEffect} from "react";
import 'font-awesome/css/font-awesome.min.css';
import MyProvider, {useStore} from "./store/MyProvider";
import {Collapse} from "bootstrap"; // 确保点击折叠展开的部分正常
import Home from "./components/home/Home";
import {getInitState as getLoginInitState} from './store/loginReducer';

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
import Header from "./components/menu";
import {menu as defaultMenu, settingMenus} from './components/temporary/data';
import components, { RouteTest } from './components/temporary/components';

const getSettingMenuRoute = (settingMenu) => {
    let routeComponents = [];
    let routes = settingMenu.map(m => {
        let items = m.children ? [...m.children] : [m];
        let routes = [];
        console.log('items', items);
        items.forEach(item => {
            routes.push((<PrivateRoute key={item.menuId} path={item.url}>
                {components[item.name]}
            </PrivateRoute>));
        });
        console.log('routes', routes);
        return routes;
    });
    routes.forEach(route => {
        routeComponents = [...routeComponents, ...route];
    })
    return routeComponents;
}

function App() {
    let [settingMenu, setSettingMenu] = useState([]);
    let [menu, setMenu] = useState(defaultMenu);
    let {isLogin} = getLoginInitState();
    console.log('AppisLogin', isLogin);
    useEffect(() => {
        // 将类添加到 body 元素
        document.body.classList.add('app');
        let loginState = getLoginInitState();
        if (loginState.isLogin) {
            setMenu([...defaultMenu, ...settingMenus[loginState.role]]);
            setSettingMenu(settingMenus[loginState.role]);
            //console.log(menu);
        }
        return () => {
            // 当组件卸载时从 body 元素中删除类
            document.body.classList.remove('app');
        }
    }, []);

    return (
        <Router>
            <MyProvider>
                <Header menu={menu}/>
                <Switch>
                    {[
                        <Route key={'00'} path={'/'} exact render={() => <Redirect to={{pathname: '/home'}}/>}/>,
                        <Route key={'01'} path={'/home'} component={Home}/>,
                        <Route key={'02'} path={'/news'} render={() => <News/>}/>,
                        <Route key={'001'} path={'/login'} component={Login}/>,
                        <PrivateRoute key={'04'} path={'/me'} msg={'hello'}>
                            <Me/>
                        </PrivateRoute>,
                        ...getSettingMenuRoute(settingMenu),
                    ]}
                </Switch>
            </MyProvider>
        </Router>
    );
}

export default App;
