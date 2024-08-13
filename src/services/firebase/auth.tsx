import auth from '@react-native-firebase/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';

export const createUser = (
  EMAIL: string,
  PASSWORD: string,
  navigation: NativeStackNavigationProp<StackParamList>,
) => {
  if (!EMAIL || !PASSWORD) {
    console.log('MAIL VEYA SİFRE BOS !!!');
    return;
  }
  if (EMAIL != null && PASSWORD != null) {
    auth()
      .createUserWithEmailAndPassword(EMAIL, PASSWORD)
      .then(res => {
        console.log(res);
        navigation.navigate('Home');
      })

      .catch(err => console.log(err));
  }
};
export const signInUser = (
  EMAIL: string,
  PASSWORD: string,
  navigation: NativeStackNavigationProp<StackParamList>,
) => {
  if (!EMAIL || !PASSWORD) {
    console.log('MAIL VEYA SİFRE BOS !!!');
    return;
  }
  auth()
    .signInWithEmailAndPassword(EMAIL, PASSWORD)
    .then(res => {
      console.log(res);
      navigation.navigate('Home');
    })
    .catch(err => console.log(err));
};
