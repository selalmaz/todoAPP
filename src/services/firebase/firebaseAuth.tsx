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

import {showMessage} from 'react-native-flash-message';
import errorMessageParser from '../../utils/errorMessageParser';

export const createUserWithEmail = (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<StackParamList>,
  dispatch: Dispatch, // dispatch i eklendi hook hatası verdigi icin parametre olarka alıyorum
) => {
  if (!email || !password) {
    showMessage({
      message: 'MAIL VEYA SİFRE BOS !!!',
      type: 'danger',
    });
    return;
  }

  dispatch(startLoading());

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);
      navigation.pop();
      navigation.replace('Home');

      showMessage({
        message: 'Hesap oluşturma başarılı',
        type: 'info',
      });
    })
    .catch(err => {
      console.log(err.message);
      showMessage({
        message: errorMessageParser(err),
        type: 'danger',
      });
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
  if (!email || !password) {
    showMessage({
      message: 'MAIL VEYA SİFRE BOS !!!',
      type: 'danger',
    });
    return;
  }

  dispatch(startLoading());

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('Giris islemi basarili ' + res.user.email);
      dispatch(setLoginMail(''));
      dispatch(setLoginPassword(''));
      showMessage({
        message: 'Giriş işlemi başarili',
        type: 'info',
      });
      navigation.replace('Home');
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoginPassword(''));
      showMessage({
        message: errorMessageParser(err),
        type: 'danger',
      });
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
      showMessage({
        message: 'Cikis islemi basarili',
        type: 'info',
      });
    })
    .catch(err => {
      console.log(err);
      showMessage({
        message: errorMessageParser(err),
        type: 'danger',
      });
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};
