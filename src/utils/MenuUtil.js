import PrivateRoute from "../components/PrivateRoute";
import components from "../components/temporary/components";
import React from "react";

export const getSettingMenuRoute = (settingMenu) => {
    let routeComponents = [];
    let routes = settingMenu.map(m => {
        let items = m.children ? [...m.children] : [m];
        let routes = [];
        items.forEach(item => {
            routes.push((<PrivateRoute key={item.menuId} path={item.url}>
                {components[item.name]}
            </PrivateRoute>));
        });
        return routes;
    });
    routes.forEach(route => {
        routeComponents = [...routeComponents, ...route];
    })
    return routeComponents;
};
