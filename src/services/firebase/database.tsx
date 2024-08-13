import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseTaskData from '../../utils/parseTaskData';

export const adDB = (task: string) => {
  const uid = auth().currentUser?.uid;

  const newReference = database()
    .ref(uid + '/')
    .push();

  newReference
    .set({
      task: task,
      complete: false,
    })
    .then(() => console.log('data updated.'))
    .catch(err => console.log(err));
};

export const readData = async () => {
  const uid = auth().currentUser?.uid;

  try {
    const snapshot = await database()
      .ref(uid + '/')
      .once('value');
    const parsedData = parseTaskData(snapshot.val());
    console.log('User data: ', parsedData);
    return parsedData;
  } catch (err) {
    console.log(err);
    return []; // hata olıursa bos deger
  }
};

export const updateDB = () => {};
export const deleteDB = () => {};
