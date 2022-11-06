import React from 'react';
import PropTypes from 'prop-types';

Home.propTypes = {

};

function Home(props) {
    return (
        <div className="app-wrapper">
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <h1 className="app-page-title">我是首页</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
