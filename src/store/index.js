import { configureStore} from "@reduxjs/toolkit";
import loadingReducer from './LoadingSlice';

export default configureStore( {
    reducer :{
        loading: loadingReducer,
    },
});
