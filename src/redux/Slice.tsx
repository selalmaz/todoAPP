import {createSlice, nanoid} from '@reduxjs/toolkit';

interface TaskState {
  gorevler: {task: string; isChecked: boolean; id: string}[];
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
      state.gorevler.push({
        task: action.payload,
        isChecked: false,
        id: nanoid(), // silme ve check islemleri icin id vermek gerekti
      });
      console.log('added task: ' + action.payload);
    },
    removeTask(state, action) {
      state.gorevler = state.gorevler.filter(
        gorev => gorev.id !== action.payload, // id ye göre filtere uygular
      );
      console.log('Removed task: ' + action.payload);
    },
    completeTask(state) {
      state.complete += 1;
      console.log('completed task count: ' + state.complete);
    },
    unCompleteTask(state) {
      state.complete -= 1;
      console.log('completed task count: ' + state.complete);
    },
    Check(state, action) {
      const id = state.gorevler.find(gorev => gorev.id === action.payload);
      if (id) {
        id.isChecked = !id.isChecked;
      }
    },
  },
});

export default Slice;
export const {setTasks, removeTask, completeTask, unCompleteTask, Check} =
  Slice.actions;
