import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BaseContentContainer from "../container/BaseContentContainer";

ContentAreaLoading.propTypes = {

};

function ContentAreaLoading(props) {
    return (
        <BaseContentContainer>
            <div className={'placeholder-glow'}>
                <h1 className="app-page-title placeholder">
                    Loading
                </h1>
                {[1,2,3,4,5].map(i => (
                    <div  key={i} className="app-page-title placeholder col-12">
                    </div>
                ))}
            </div>
        </BaseContentContainer>
    );
}

export default memo(ContentAreaLoading);
