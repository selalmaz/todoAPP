import auth from '@react-native-firebase/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';

export const createUser = (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<StackParamList>,
) => {
  if (!email || !password) {
    console.log('MAIL VEYA SİFRE BOS !!!');
    return;
  }
  if (email != null && password != null) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        navigation.navigate('Home');
      })

      .catch(err => console.log(err));
  }
};
export const signInUser = (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<StackParamList>,
) => {
  if (!email || !password) {
    console.log('MAIL VEYA SİFRE BOS !!!');
    return;
  }
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('giris basarili ' + res.user.email);
      navigation.navigate('Home');
    })
    .catch(err => console.log(err));
};

export const signOutUser = (
  navigation: NativeStackNavigationProp<StackParamList>,
) => {
  console.log('cikis yapilan hesap ' + auth().currentUser?.email);
  auth()
    .signOut()
    .then(res => {
      console.log('cikis basarili\naktif hesap: ' + auth().currentUser + res);
      navigation.navigate('Login');
    })
    .catch(err => console.log(err));
};
