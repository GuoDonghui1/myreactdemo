import React from 'react';
import PropTypes from 'prop-types';
import './circle.css';

CircleLoading.propTypes = {

};

function CircleLoading(props) {
    return (
        <div className={'circle-loading'}/>
    );
}
function CircleLoad(props) {
    return(
      <div className={'load-container'}>
          <div className={'loader'}/>
      </div>
    );
}
function MaterialLoading({strokeColor='rbg(57, 123, 235)', strokeWidth=3, radius= 20, ...rest}) {
    return(
        <div className="material-loader">
            <svg className="circular" viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" stroke="#106CFA" strokeWidth="5%" strokeLinecap="round"/>
            </svg>
        </div>
    );
}
export {
    CircleLoading,
    CircleLoad,
    MaterialLoading,
};
