import React from 'react';
import PropTypes from 'prop-types';

ContentBetweenContainer.propTypes = {

};

function ContentBetweenContainer({children = [], ...rest}) {
    if(React.isValidElement(children)) {
        children = [children];
    }
    return (
        <div className="row g-3 mb-4 align-items-center justify-content-between">
            {children.map(child => (
                <div key={parseInt(`${Math.random() * 100}`)} className={'col-auto'}>{child}</div>
            ))}
        </div>
    );
}

export default ContentBetweenContainer;
