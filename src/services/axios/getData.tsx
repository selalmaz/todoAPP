import axios from 'axios';
import {Dispatch} from 'react';
import {startLoading, stopLoading} from '../../redux/Slice2';
import {setData} from '../../redux/Slice';

export const fetchData = async (dispatch: Dispatch<any>) => {
  dispatch(startLoading());
  try {
    const response = await axios.get('https://dummyjson.com/todos');
    dispatch(setData(response.data.todos));
    dispatch(stopLoading());
  } catch (err) {
    console.log(err);
    dispatch(stopLoading());
  }
};
