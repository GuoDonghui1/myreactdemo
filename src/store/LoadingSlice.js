import { createSlice } from "@reduxjs/toolkit";
export const loadingSlice = createSlice({
    name: 'loadingState',
    initialState: {
        loadingSidePanel: true,
    },
    reducers: {
        sidePanelLoadingState: (state, action) => {
            console.log('state', state);
            state.loadingSidePanel = action.payload;
        },
    },
});
export const { sidePanelLoadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
