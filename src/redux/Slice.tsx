import {createSlice} from '@reduxjs/toolkit';
import {TaskState} from '../types';

const initialState: TaskState = {
  complete: 0,
};

const Slice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
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

export const {completeTask, unCompleteTask} = Slice.actions;
export default Slice;
