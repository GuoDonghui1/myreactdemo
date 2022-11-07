import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

NavItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.node,
};
NavItem.defaultProps = {
    title: 'NavItem',
    active: false,
}
function NavItem(props) {
    return (
        <li className="nav-item">
            <Link className={'nav-link' + (props.active ? ' active' : '')} to={props.url}>
                <span className="nav-icon">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door"
                       fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
                      {props.icon}
                  </svg>
                </span>
                <span className="nav-link-text">{props.title}</span>
            </Link>
        </li>
    );
}

export default NavItem;
