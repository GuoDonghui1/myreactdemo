import { makeAutoObservable } from "mobx";
class VisibleStore {
    sidePanelVisible = false;
    searchInputVisible = false;
    constructor() {
        this.sidePanelVisible = window.innerWidth >= 1200;
        makeAutoObservable(this);
    }
    setPanelVisibility(isVisible) {
        this.sidePanelVisible = isVisible;
    }
    setSearchInputVisibility(isVisible) {
        this.searchInputVisible = isVisible;
    }
    resetAllVisibility() {
        this.sidePanelVisible = window.innerWidth >= 1200;
        this.searchInputVisible = false;
    }
}

export default new VisibleStore();
