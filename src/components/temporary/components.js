import React from 'react';
import PropTypes from 'prop-types';

RouteTest.propTypes = {};

export function RouteTest(props) {
    return (
        <div className="app-wrapper">
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <h1 className="app-page-title">我是{props.componentName}</h1>
                </div>
            </div>
        </div>
    );
}

export function ComponentTest(props) {
    return (
        <div className="app-wrapper">
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <h1 className="app-page-title">{props.title}</h1>
                    <div className="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration"
                         role="alert">
                        <div className="inner">
                            <div className="app-card-body p-3 p-lg-4">
                                <p>{props.children}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default {
    'feedback': <RouteTest componentName={'意见反馈'}/>,
    'about': <RouteTest componentName={'关于'}/>,
    'userManagement': <RouteTest componentName={'用户管理'}/>,
    'authorizationManagement': <RouteTest componentName={'权限管理'}/>,
    'test1': <RouteTest componentName={'测试1'}/>,
    'test2': <RouteTest componentName={'测试2'}/>,
    'needAuth': <RouteTest componentName={'需要权限'}/>,
    'noNeedAuth': <RouteTest componentName={'不需要权限'}/>,
};
