import React from 'react';
import PropTypes from 'prop-types';

BaseContentContainer.propTypes = {
    title: PropTypes.string,
};

function BaseContentContainer(props) {
    return (
        <div>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        {props.title ? (<h1 className="app-page-title">{props.title}</h1>) : null}
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaseContentContainer;
