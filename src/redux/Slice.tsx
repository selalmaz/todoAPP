import {createSlice} from '@reduxjs/toolkit';

interface TaskState {
  gorevler: {task: string; isChecked: boolean}[];
  complete: number;
}

const initialState: TaskState = {
  gorevler: [],
  complete: 0,
};

const Slice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    setTasks(state, action) {
      state.gorevler.push({task: action.payload, isChecked: false});
      console.log('added task: ' + action.payload);
    },
    removeTask(state, action) {
      state.gorevler = state.gorevler.filter(
        gorev => gorev.task !== action.payload,
      );
      console.log('Removed task: ' + action.payload);
    },
    completeTask(state) {
      state.complete += 1;
      console.log('Tamamlanan görev sayısı: ' + state.complete);
    },
    unCompleteTask(state) {
      state.complete -= 1;
      console.log('Tamamlanan görev sayısı: ' + state.complete);
    },
    toggleCheck(state, action) {
      const task = state.gorevler.find(gorev => gorev.task === action.payload);
      if (task) {
        task.isChecked = !task.isChecked;
      }
    },
  },
});

export default Slice;
export const {setTasks, removeTask, completeTask, unCompleteTask, toggleCheck} =
  Slice.actions;
