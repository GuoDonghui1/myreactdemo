import React from 'react';
import PropTypes from 'prop-types';

BaseContentContainer.propTypes = {

};

function BaseContentContainer(props) {
    return (
        <div>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaseContentContainer;
