import React from 'react';
import PropTypes from 'prop-types';
import BaseContentContainer from "./BaseContentContainer";

WideRectangleBox.propTypes = {
    title: PropTypes.string,
};

function WideRectangleBox(props) {
    return (
            <div className="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration"
                 role="alert">
                <div className="inner">
                    <div className="app-card-body p-3 p-lg-4">
                        {props.children}
                    </div>
                </div>
            </div>
    );
}

export default WideRectangleBox;
