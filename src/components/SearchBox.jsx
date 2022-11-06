import React from 'react';
import PropTypes from 'prop-types';
import TopBar from "./TopBar";

SearchBox.propTypes = {

};

function SearchBox(props) {
    return (
        <>
            {/*serch-icon*/}
            <div className="search-mobile-trigger d-sm-none col">
                <i className="search-mobile-trigger-icon fa fa-search"/>
            </div>
            {/* search-box */}
            <div className="app-search-box col">
                <form className="app-search-form">
                    <input type="text" placeholder="Search..." name="search"
                           className="form-control search-input"/>
                    <button type="submit" className="btn search-btn btn-primary" value="Search">
                        <i className="fa fa-search"/>
                    </button>
                </form>
            </div>
        </>
    );
}

export default SearchBox;
