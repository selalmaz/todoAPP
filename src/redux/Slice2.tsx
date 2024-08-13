import {createSlice} from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      console.log(state.isLoading);
    },
    stopLoading(state) {
      state.isLoading = false;
      console.log(state.isLoading);
    },
  },
});

export const {startLoading, stopLoading} = loadingSlice.actions;
export default loadingSlice;
