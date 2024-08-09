import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Input from '../../components/Input/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import style from './LoginPage.style';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
    <SafeAreaView style={style.container}>
      <Input placeHolder="Mail giriniz" onChange={handleEmailChange}></Input>
      <Input
        placeHolder="sifre giriniz"
        onChange={handlePasswordChange}
        secureTextEntry={true}></Input>

      <MyButton title="Giris Yap" navigateTo="Home"></MyButton>
    </SafeAreaView>
  );
};

export default LoginPage;
