import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseTaskData from '../../utils/parseTaskData';
import {Dispatch} from 'react';
import {startLoading, stopLoading} from '../../redux/TaskSlice';

export const addTaskToDatabase = (task: string, dispatch: Dispatch<any>) => {
  dispatch(startLoading());
  const currentUserID = auth().currentUser?.uid;

  const newReference = database()
    .ref(currentUserID + '/')
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

export const fetchTaskData = async () => {
  const currentUserID = auth().currentUser?.uid;

  try {
    const snapshot = await database()
      .ref(currentUserID + '/')
      .once('value');
    const parsedData = parseTaskData(snapshot.val());
    // console.log('User data: ', parsedData);

    return parsedData;
  } catch (err) {
    console.log(err);
  }
};
export const updateTaskStatus = async (
  taskId: string,
  isChecked: boolean,
  dispatch: Dispatch<any>,
) => {
  const currentUserID = auth().currentUser?.uid;

  dispatch(startLoading());

  try {
    await database()
      .ref(currentUserID + '/' + taskId)
      .update({
        complete: isChecked,
      });
    console.log('task update.' + taskId + ' ' + isChecked);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(stopLoading());
  }
};

export const deleteTodoById = async (
  taskId: string,
  dispatch: Dispatch<any>,
) => {
  dispatch(startLoading());
  const currentUserID = auth().currentUser?.uid;

  try {
    await database()
      .ref(currentUserID + '/' + taskId)
      .remove();
    console.log('task delete success.');
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(stopLoading());
  }
};
