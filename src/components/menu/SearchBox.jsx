import React from 'react';
import PropTypes from 'prop-types';
import TopBar from "./TopBar";
import {useStore} from "../../store/MyProvider";
import { observer } from 'mobx-react';
import { runInAction } from "mobx";

SearchBox.propTypes = {

};
const searchMobileTriggerHandler = (visibleStore) => {
    runInAction(() =>visibleStore.setSearchInputVisibility(!visibleStore.searchInputVisible));

}

function SearchBox(props) {
    let { visibleStore } = useStore();
    return (
        <>
            {/*serch-icon*/}
            <div className="search-mobile-trigger d-sm-none col" onClick={() => searchMobileTriggerHandler(visibleStore)}>
                <i className={`search-mobile-trigger-icon fa ${visibleStore.searchInputVisible ? 'fa-times' : 'fa-search'}`}/>
            </div>
            {/* search-box */}
            <div className={`app-search-box col ${visibleStore.searchInputVisible ? 'is-visible' : null}`}>
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

export default observer(SearchBox);
