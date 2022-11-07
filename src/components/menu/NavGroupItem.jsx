import React from 'react';
import PropTypes from 'prop-types';
import NavSubMenuItem from "./NavSubMenuItem";

NavGroupItem.propTypes = {
    subMenuId: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.array,
    icon: PropTypes.node,
};

function NavGroupItem(props) {
    return (
        <li className="nav-item has-submenu">
            <a className="nav-link submenu-toggle"  href="#" data-bs-toggle="collapse" data-bs-target={`#${props.subMenuId}`}
               aria-expanded="false" aria-controls={props.subMenuId}>
                            <span className="nav-icon">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-files"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    {props.icon}
                                </svg>
                            </span>
                <span className="nav-link-text">{props.title}</span>
                <span className="submenu-arrow">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
            </a>
            <NavSubMenuItem items={props.children} subMenuId={props.subMenuId}/>
        </li>
    );
}

export default NavGroupItem;
