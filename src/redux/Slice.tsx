import {createSlice} from '@reduxjs/toolkit';

interface TaskState {
  gorevler: string[];
  gorev: string;
}

const initialState: TaskState = {
  gorevler: [], // Boş bir string dizisi
  gorev: '',
};

const Slice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    setTasks(state, action) {
      state.gorevler.push(action.payload);
    },
    addTask(state, action) {
      state.gorev = action.payload;
    },
    removeTask(state, action) {
      state.gorevler = state.gorevler.filter(gorev => gorev !== action.payload);
    },
  },
});

export default Slice;
export const {setTasks, addTask, removeTask} = Slice.actions;
