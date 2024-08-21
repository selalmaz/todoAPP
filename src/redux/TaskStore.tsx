import {configureStore} from '@reduxjs/toolkit';
import Slice from './TaskSlice';

export const Store = configureStore({
  reducer: {
    Tasks: Slice.reducer,
  },
});

export default Store;
export type StateType = ReturnType<typeof Store.getState>;
