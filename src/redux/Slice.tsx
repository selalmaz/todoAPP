import {createSlice, nanoid} from '@reduxjs/toolkit';

interface TaskState {
  gorevler: {task: string; id: string}[];
  complete: number;
  check: boolean;
}

const initialState: TaskState = {
  gorevler: [],
  complete: 0,
  check: false,
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
    Check(state, action) {
      state.check = !action.payload;
      console.log(action.payload);
    },
  },
});

export default Slice;
export const {completeTask, unCompleteTask, Check} = Slice.actions;
