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
    setGorevler(state, action) {
      state.gorevler.push(action.payload);
    },
    setGorev(state, action) {
      state.gorev = action.payload;
    },
  },
});

export default Slice;
export const {setGorevler, setGorev} = Slice.actions;
