import axios from 'axios';
import {Dispatch} from 'react';
import {startLoading, stopLoading} from '../../redux/Slice2';

export const fetchData = async (dispatch: Dispatch<any>) => {
  dispatch(startLoading());
  try {
    const response = await axios.get('https://dummyjson.com/todos');
    dispatch(stopLoading());
    return response.data.todos;
  } catch (err) {
    console.log(err);
    dispatch(stopLoading());
    return [];
  }
};
