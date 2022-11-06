import React from 'react';
import PropTypes from 'prop-types';
import * as icons from '../utils/IconData';

SidePanelFooter.propTypes = {

};
const options = [
    {
        id: 0,
        icon: 'settings',
        text: '设置',
    },
    {
        id: 1,
        icon: 'download',
        text: '下载',
    },
    {
        id: 2,
        icon: 'question',
        text: '联系我们',
    }
];
function SidePanelFooter(props) {
    return (
        <div className="app-sidepanel-footer">
            <nav className="app-nav app-nav-footer">
                <ul className="app-menu footer-menu list-unstyled">
                    {options.map(option => (
                        <li key={option.id} className="nav-item"><a
                            className="nav-link" href="#"><span className="nav-icon">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                  {icons[option.icon]}
              </svg>
              </span><span className="nav-link-text">{option.text}</span></a></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default SidePanelFooter;
