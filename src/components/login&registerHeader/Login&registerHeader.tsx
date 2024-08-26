import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../input/Input';
import style from './Login&Register.style';
import {StateType} from '../../redux/TaskStore';
import {
  setLoginMail,
  setLoginPassword,
  setRegisterMail,
  setRegisterPassword,
} from '../../redux/TaskSlice';

type authType = {
  type: 'Login' | 'Register';
};

export default function LoginRegisterHeader(props: authType) {
  const {height, width} = Dimensions.get('window');
  const dispatch = useDispatch();
  const state = useSelector((state: StateType) => state.Tasks);

  const mail = props.type === 'Login' ? state.loginMail : state.registerMail;
  const password =
    props.type === 'Login' ? state.loginPassword : state.registerPassword;

  const handleMail = (email: string) => {
    props.type === 'Login'
      ? dispatch(setLoginMail(email))
      : dispatch(setRegisterMail(email));
  };

  const handlePassword = (password: string) => {
    props.type === 'Login'
      ? dispatch(setLoginPassword(password))
      : dispatch(setRegisterPassword(password));
  };

  return (
    <View>
      <View style={style.logoContainer}>
        <Image
          source={require('../../assets/images/logo_list.png')}
          style={{width: width * 0.6, height: height * 0.3}}
          resizeMode="contain"
        />
      </View>

      <View style={style.inputContainer}>
        <Input
          inputMode="email"
          placeHolder="Email"
          value={mail}
          onChange={handleMail}
        />
        <Input
          inputMode="text"
          placeHolder="Password"
          value={password}
          onChange={handlePassword}
          secureTextEntry
        />
      </View>
    </View>
  );
}
