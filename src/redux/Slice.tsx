import {createSlice} from '@reduxjs/toolkit';
import {TaskState} from '../types';

const initialState: TaskState = {
  complete: 0,
  items: [],
};

const Slice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    setData(state, action) {
      state.items = action.payload;
    },

    completeTask(state) {
      state.complete += 1;
      console.log('completed task count: ' + state.complete);
    },
    unCompleteTask(state) {
      state.complete -= 1;
      console.log('completed task count: ' + state.complete);
    },
  },
});

export const {completeTask, unCompleteTask, setData} = Slice.actions;
export default Slice;
