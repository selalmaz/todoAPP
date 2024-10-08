import axios from 'axios';
import {Dispatch} from 'react';
import {startLoading, stopLoading} from '../../redux/TaskSlice';
import {setData} from '../../redux/TaskSlice';

const URL = 'http://10.0.2.2:3000/users';

export const fetchData = async (dispatch: Dispatch<any>) => {
  dispatch(startLoading());
  try {
    const response = await axios.get(URL);
    dispatch(setData(response.data));
    dispatch(stopLoading());
  } catch (err) {
    console.log(err);
    dispatch(stopLoading());
  }
};
