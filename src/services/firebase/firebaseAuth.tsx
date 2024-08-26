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

export const createUserWithEmail = async (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<StackParamList>,
  dispatch: Dispatch,
) => {
  dispatch(startLoading());

  if (!email || !password) {
    showUserMessage('Please fill in all required fields');
    dispatch(stopLoading());
    return;
  }

  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    console.log(res);
    navigation.pop();
    navigation.replace('Home');
    showUserMessage('Registration successful', 'info');
  } catch (err: any) {
    showUserMessage(err.message);
  } finally {
    dispatch(stopLoading());
  }
};
export const signUpWithEmail = async (
  email: string,
  password: string,
  navigation: NativeStackNavigationProp<StackParamList>,
  dispatch: Dispatch,
) => {
  dispatch(startLoading());

  if (!email || !password) {
    showUserMessage('Please fill in all required fields');
    dispatch(stopLoading());
    return;
  }

  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    console.log('Login successful ' + res.user.email);
    dispatch(setLoginMail(''));
    dispatch(setLoginPassword(''));
    showUserMessage('Login successful', 'info');
    navigation.replace('Home');
  } catch (err: any) {
    showUserMessage(err.message);
    dispatch(setLoginPassword(''));
  } finally {
    dispatch(stopLoading());
  }
};

export const signOutUser = async (
  navigation: NativeStackNavigationProp<StackParamList>,
  dispatch: Dispatch,
) => {
  dispatch(startLoading());

  try {
    await auth().signOut();
    console.log('Sign out successful');
    navigation.replace('Login');
    showUserMessage('Logout successful', 'info');
  } catch (err: any) {
    console.log(err);
    showUserMessage(err.message);
  } finally {
    dispatch(stopLoading());
  }
};
