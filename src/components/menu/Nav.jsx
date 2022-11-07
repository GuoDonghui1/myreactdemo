import React from 'react';
import PropTypes from 'prop-types';
import NavItem from "./NavItem";
import NavGroupItem from "./NavGroupItem";
import { useLocation } from 'react-router-dom';
import * as icons from "../../utils/IconData";

Nav.propTypes = {
    menu: PropTypes.array.isRequired,
};

function Nav(props) {
    let urlPath = useLocation().pathname;
    return (
        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
            <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                { props.menu.map(m => {
                    if (!m.hasOwnProperty('subMenuId')) {
                        return <NavItem key={m.menuId} active={urlPath === m.url} title={m.title} icon={icons[m.icon]} url={m.url}/>
                    } else {
                        return <NavGroupItem key={m.menuId} title={m.title}
                                             subMenuId={m.subMenuId} children={m.children} icon={icons[m.icon]} url={m.url}/>
                    }
                })}
            </ul>
        </nav>
    );
}

export default Nav;
