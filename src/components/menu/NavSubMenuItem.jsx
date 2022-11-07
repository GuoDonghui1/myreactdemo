import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
NavSubMenuItem.propTypes = {
    items: PropTypes.array.isRequired,
    subMenuId: PropTypes.string,
};

function NavSubMenuItem(props) {
    let urlPath = useLocation().pathname;
    return (
        <div id={props.subMenuId} className="collapse submenu submenu-1" data-bs-parent="#menu-accordion">
            <ul className="submenu-list list-unstyled">
                {props.items.map(item => (
                    <li key={item.menuId} className="submenu-item">
                        <Link className={'submenu-link' + (item.url === urlPath ? ' active' : '')} to={item.url}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavSubMenuItem;
