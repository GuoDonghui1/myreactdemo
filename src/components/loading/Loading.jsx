import React from 'react';
import PropTypes from 'prop-types';
import './loading.css';

Loading.propTypes = {

};

function Loading(props) {
    return (
        <div className={`ant-spin ant-spin-lg ant-spin-spinning ${props.className}`}>
            <span className="ant-spin-dot ant-spin-dot-spin">
                <i className="ant-spin-dot-item"/>
                <i className="ant-spin-dot-item"/>
                <i className="ant-spin-dot-item"/>
                <i className="ant-spin-dot-item"/>
            </span>
        </div>
    );
}

export default Loading;
