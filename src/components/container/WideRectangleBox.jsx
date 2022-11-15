import React from 'react';
import PropTypes from 'prop-types';

WideRectangleBox.propTypes = {

};

function WideRectangleBox(props) {
    return (
        <div className="app-wrapper">
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <h1 className="app-page-title">{props.title}</h1>
                    <div className="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration"
                         role="alert">
                        <div className="inner">
                            <div className="app-card-body p-3 p-lg-4">
                                {props.children}
                                <button type="button" className="btn-close" data-dismiss="alert"
                                        aria-label="Close"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WideRectangleBox;
