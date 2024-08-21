import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseTaskData from '../../utils/parseTaskData';
import {Dispatch} from 'react';
import {startLoading, stopLoading} from '../../redux/TaskSlice';

export const addTaskToDatabase = (task: string, dispatch: Dispatch<any>) => {
  const uid = auth().currentUser?.uid;

  dispatch(startLoading());

  const newReference = database()
    .ref(uid + '/')
    .push();

  try {
    newReference.set({
      task: task,
      complete: false,
    });
    console.log('Data added: ' + task);
  } catch (err) {
    console.log('Error:', err);
  } finally {
    dispatch(stopLoading());
  }
};

export const fetchTaskData = async (dispatch: Dispatch<any>) => {
  const uid = auth().currentUser?.uid;

  try {
    const snapshot = await database()
      .ref(uid + '/')
      .once('value');
    const parsedData = parseTaskData(snapshot.val());
    // console.log('User data: ', parsedData);

    return parsedData;
  } catch (err) {
    console.log(err);
    dispatch(stopLoading());
    return []; // hata olıursa bos deger
  }
};
export const updateTaskStatus = async (
  taskId: string,
  isChecked: boolean,
  dispatch: Dispatch<any>,
) => {
  const uid = auth().currentUser?.uid;
  dispatch(startLoading());

  try {
    await database()
      .ref(uid + '/' + taskId)
      .update({
        complete: isChecked,
      });
    console.log('task update.' + taskId + ' ' + isChecked);
    dispatch(stopLoading());
  } catch (err) {
    console.log(err);
    dispatch(stopLoading());
  }
};

export const deleteTodoById = async (
  taskId: string,
  dispatch: Dispatch<any>,
) => {
  const uid = auth().currentUser?.uid;
  dispatch(startLoading());

  try {
    await database()
      .ref(uid + '/' + taskId)
      .remove();
    console.log('task delete success.');
    dispatch(stopLoading());
  } catch (err) {
    console.log(err);
    dispatch(stopLoading());
  }
};
