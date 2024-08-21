import {createSlice} from '@reduxjs/toolkit';
import {TaskState} from '../types';

const initialState: TaskState = {
  items: [],
  isLoading: false,
  userTaskItems: [],
};

const taskSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    setData(state, action) {
      state.items = action.payload;
    },
    startLoading(state) {
      state.isLoading = true;
      console.log('1');
    },
    stopLoading(state) {
      state.isLoading = false;
      console.log('0');
    },
    setUserTasks(state, action) {
      state.userTaskItems = action.payload;
    },
  },
});

export const {setData, startLoading, stopLoading, setUserTasks} =
  taskSlice.actions;
export default taskSlice;
