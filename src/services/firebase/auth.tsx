import auth from '@react-native-firebase/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';
import {startLoading, stopLoading} from '../../redux/Slice2';
import {Dispatch} from 'redux';

import {showMessage} from 'react-native-flash-message';
import errorMessageParser from '../../utils/errorMessageParser';

export const createUser = (
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
      navigation.navigate('Home');
      showMessage({
        message: 'Hesap oluşturma başarılı',
        type: 'info',
      });
      dispatch(stopLoading());
    })
    .catch(err => {
      console.log(err.message);
      showMessage({
        message: errorMessageParser(err.code),
        type: 'danger',
      });
      dispatch(stopLoading());
    });
};

export const signInUser = (
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
      dispatch(stopLoading());
      showMessage({
        message: 'Giriş işlemi başarili',
        type: 'info',
      });
      navigation.navigate('Home');
    })
    .catch(err => {
      console.log(err);
      dispatch(stopLoading());

      showMessage({
        message: errorMessageParser(err.code),
        type: 'danger',
      });
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
      navigation.navigate('Login');
      showMessage({
        message: 'Cikis islemi basarili',
        type: 'info',
      });
      dispatch(stopLoading()); // Yükleme durduruluyor
    })
    .catch(err => {
      console.log(err);
      showMessage({
        message: errorMessageParser(err.code),
        type: 'danger',
      });
      dispatch(stopLoading());
    });
};
