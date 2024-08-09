import {configureStore} from '@reduxjs/toolkit';
import Slice from './Slice';

export const Store = configureStore({
  reducer: {
    tasklist: Slice.reducer,
  },
});

export default Store;
export type StateType = ReturnType<typeof Store.getState>;
