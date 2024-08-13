import auth from '@react-native-firebase/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';
import {startLoading, stopLoading} from '../../redux/Slice2';
import {Dispatch} from 'redux';

export const createUser = (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<StackParamList>,
  dispatch: Dispatch, // dispatch i eklendi hook hatası verdigi icin parametre olarka alıyorum
) => {
  if (!email || !password) {
    console.log('MAIL VEYA SİFRE BOS !!!');
    return;
  }

  dispatch(startLoading());

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);
      navigation.navigate('Home');
      dispatch(stopLoading());
    })
    .catch(err => {
      console.log(err);
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
    console.log('MAIL VEYA SİFRE BOS !!!');
    return;
  }

  dispatch(startLoading());

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('giris basarili ' + res.user.email);
      dispatch(stopLoading());
      navigation.navigate('Home');
    })
    .catch(err => {
      console.log(err);
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
      navigation.navigate('Login');
      dispatch(stopLoading()); // Yükleme durduruluyor
    })
    .catch(err => {
      console.log(err);
      dispatch(stopLoading());
    });
};
