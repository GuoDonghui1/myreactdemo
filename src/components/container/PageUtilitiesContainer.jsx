import React from 'react';
import PropTypes from 'prop-types';

PageUtilitiesContainer.propTypes = {

};

function PageUtilitiesContainer({children = [], ...rest}) {
    if(React.isValidElement(children)) {
        children = [children];
    }
    return (
        <div className="page-utilities">
            <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                {children.map(child => (
                    <div key={parseInt(`${Math.random() * 100}`)} className={'col-auto'}>{child}</div>
                ))}
            </div>
        </div>
    );
}

export default PageUtilitiesContainer;
