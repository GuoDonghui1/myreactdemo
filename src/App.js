import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/portal.css';
import 'font-awesome/css/font-awesome.min.css';
import 'antd/dist/antd.less';
import React, {useState, useEffect} from "react";
import MyProvider from "./store/MyProvider";
import {Collapse} from "bootstrap"; // 确保点击折叠展开的部分正常
import Home from "./components/home/Home";
import {getInitState as getLoginInitState} from './store/loginReducer';
import {Provider} from "react-redux";
import appStore from './store';

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
import { menu as defaultMenu } from './components/temporary/data';
import { sidePanelLoadingState } from "./store/LoadingSlice";
import ContentAreaLoading from "./components/loading/ContentAreaLoading";
import {getMenus} from "./components/api/MenuService";
import { getSettingMenuRoute} from "./utils/MenuUtil";
import ProblemSet from "./components/problemset";

function App() {
    let [settingMenu, setSettingMenu] = useState([]);
    let [menu, setMenu] = useState(defaultMenu);
    let spLoading = appStore.getState().loading.loadingSidePanel;
    useEffect(() => {
        // 将类添加到 body 元素
        document.body.classList.add('app');
        let loginState = getLoginInitState();
        if (loginState.isLogin) {
            getMenus(loginState.roleId).then(data => {
                console.log('api获取的菜单信息: ', data);
                appStore.dispatch(sidePanelLoadingState(false));
                setMenu([...defaultMenu, ...data]);
                setSettingMenu(data);
            }).catch(e => {
                console.log('api获取菜单时信息失败: ', e);
                appStore.dispatch(sidePanelLoadingState(false));
                setSettingMenu([]);
            });
            return;
        }
        appStore.dispatch(sidePanelLoadingState(false));
        setSettingMenu([]);
        return () => {
            // 当组件卸载时从 body 元素中删除类
            document.body.classList.remove('app');
        }
    }, []);
    return (
        <Router>
            <Provider store={appStore}>
                <MyProvider>
                    <Header menu={menu}/>
                    <Switch>
                        <Route key={'001'} path={'/login'} component={Login}/>
                        { spLoading ? <ContentAreaLoading/> :
                            [
                            <Route key={'00'} path={'/'} exact render={() => <Redirect to={{pathname: '/home'}}/>}/>,
                            <Route key={'01'} path={'/home'} component={Home}/>,
                            <Route key={'02'} path={'/news'} render={() => <News/>}/>,
                            <Route key={'02'} path={'/problemset'} render={p => <ProblemSet {...p}/>}/>,
                            <PrivateRoute key={'04'} path={'/me'} msg={'hello'}>
                                <Me/>
                            </PrivateRoute>,
                            ...getSettingMenuRoute(settingMenu),
                            ]
                        }
                    </Switch>
                </MyProvider>
            </Provider>
        </Router>
    );
}

export default App;
