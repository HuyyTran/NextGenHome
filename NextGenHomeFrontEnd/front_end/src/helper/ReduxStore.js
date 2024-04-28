import { configureStore } from '@reduxjs/toolkit'
import { globalStateSlice } from './globalState/GlobalState';

const store = configureStore({
    reducer: globalStateSlice.reducer
});

store.subscribe(() => console.log(store.getState()))

export default store;
