import { configureStore } from '@reduxjs/toolkit'
import { globalStateSlice } from './globalState/GlobalState';

const store = configureStore({
    reducer: globalStateSlice.reducer
});

export default store;
