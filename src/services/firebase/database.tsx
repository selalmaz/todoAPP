import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseTaskData from '../../utils/parseTaskData';
import {Dispatch} from 'react';
import {startLoading, stopLoading} from '../../redux/Slice2';

export const adDB = (task: string, dispatch: Dispatch<any>) => {
  const uid = auth().currentUser?.uid;

  dispatch(startLoading());

  const newReference = database()
    .ref(uid + '/')
    .push();

  newReference
    .set({
      task: task,
      complete: false,
    })
    .then(() => {
      console.log('data updated.');
      dispatch(stopLoading());
    })
    .catch(err => {
      console.log(err);
      dispatch(stopLoading());
    });
};

export const readData = async (dispatch: Dispatch<any>) => {
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
export const updateDB = async (
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
    console.log('Task updated.');
    dispatch(stopLoading());
  } catch (err) {
    console.log(err);
    dispatch(stopLoading());
  }
};

export const deleteTask = async (taskId: string, dispatch: Dispatch<any>) => {
  const uid = auth().currentUser?.uid;
  dispatch(startLoading());

  try {
    await database()
      .ref(uid + '/' + taskId)
      .remove();
    console.log('Task deleted successfully.');
    dispatch(stopLoading());
  } catch (err) {
    console.log(err);
    dispatch(stopLoading());
  }
};
