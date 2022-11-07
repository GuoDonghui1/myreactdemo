import React from 'react';
import PropTypes from 'prop-types';
import { settings } from "../../utils/IconData";

SettingsButton.propTypes = {

};

function SettingsButton(props) {
    return (
        <div className="app-utility-item">
            <a href="settings.html" title="Settings">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear icon"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    { settings }
                </svg>
            </a>
        </div>
    );
}

export default SettingsButton;
