import {configureStore} from '@reduxjs/toolkit';
import Slice from './Slice';
import Slice2 from './Slice2';

export const Store = configureStore({
  reducer: {
    tasklist: Slice.reducer,
    loading: Slice2.reducer,
  },
});

export default Store;
export type StateType = ReturnType<typeof Store.getState>;
