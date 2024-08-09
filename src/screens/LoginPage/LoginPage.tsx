import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../components/Input/Input';

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
    <SafeAreaView style={{flex: 1}}>
      <Input placeHolder="Mail giriniz" onChange={handleEmailChange}></Input>
      <Input
        placeHolder="sifre giriniz"
        onChange={handlePasswordChange}
        secureTextEntry={true}></Input>
    </SafeAreaView>
  );
};

export default LoginPage;
