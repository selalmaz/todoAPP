import auth from '@react-native-firebase/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';
import {
  setLoginMail,
  setLoginPassword,
  startLoading,
  stopLoading,
} from '../../redux/TaskSlice';
import {Dispatch} from 'redux';
import showUserMessage from '../../utils/showUserMessage';

export const createUserWithEmail = (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<StackParamList>,
  dispatch: Dispatch, // dispatch i eklendi hook hatası verdigi icin parametre olarka alıyorum
) => {
  dispatch(startLoading());

  if (!email || !password) {
    showUserMessage('Lütfen zorunlu alanları doldurun');
    dispatch(stopLoading());
    return;
  }

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);
      navigation.pop();
      navigation.replace('Home');
      showUserMessage('İşlem başarili', 'info');
    })
    .catch(err => {
      console.log(err.message);
      showUserMessage(err);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};

export const signUpWithEmail = (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<StackParamList>,
  dispatch: Dispatch,
) => {
  dispatch(startLoading());

  if (!email || !password) {
    showUserMessage('Lütfen zorunlu alanları doldurun');
    dispatch(stopLoading());
    return;
  }

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('Giris islemi basarili ' + res.user.email);
      dispatch(setLoginMail(''));
      dispatch(setLoginPassword(''));
      showUserMessage('Giriş işlemi başarılı', 'info');
      navigation.replace('Home');
    })
    .catch(err => {
      showUserMessage(err);
      dispatch(setLoginPassword(''));
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};

export const signOutUser = (
  navigation: NativeStackNavigationProp<StackParamList>,
  dispatch: Dispatch,
) => {
  console.log('cikis yapilan hesap ' + auth().currentUser?.email);

  dispatch(startLoading());
  auth()
    .signOut()
    .then(res => {
      console.log('cikis basarili\naktif hesap: ' + auth().currentUser + res);
      navigation.replace('Login');
      showUserMessage('İşlem başarili', 'info');
    })
    .catch(err => {
      console.log(err);
      showUserMessage(err);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};
