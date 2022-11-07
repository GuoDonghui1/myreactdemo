import React from 'react';
import PropTypes from 'prop-types';

TopBar.propTypes = {

};

function TopBar(props) {
    return (
        <div className="app-header-inner">
            <div className="container-fluid py-2">
                <div className="app-header-content">
                    <div className="row justify-content-between align-items-center">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
