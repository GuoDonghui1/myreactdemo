import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './component-loading.css';

SidePanelLoading.propTypes = {

};
function SidePanelLoading(props) {
    return (
        <div className={'placeholder-wave sp-loading'}>
            {[1, 2, 3, 4, 5, 6].map(i => (
                <p key={i}>
                    <span className="placeholder col-12"/>
                </p>
            ))}
        </div>
    );
}

export default memo(SidePanelLoading);
