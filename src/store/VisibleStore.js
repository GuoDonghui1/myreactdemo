import { makeAutoObservable } from "mobx";
class VisibleStore {
    sidePanelVisible = false;
    searchInputVisible = false;
    constructor() {
        makeAutoObservable(this);
    }
    setPanelVisibility(isVisible) {
        this.sidePanelVisible = isVisible;
    }
    setSearchInputVisibility(isVisible) {
        this.searchInputVisible = isVisible;
    }
    resetAllVisibility() {
        this.sidePanelVisible = false;
        this.searchInputVisible = false;
    }
}

export default new VisibleStore();
