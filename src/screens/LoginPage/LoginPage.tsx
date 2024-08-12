import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Input from '../../components/Input/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import style from './LoginPage.style';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {width, height} = Dimensions.get('window');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={style.background}>
      <SafeAreaView style={style.container}>
        <Image
          source={require('../../assets/images/logo_list.png')}
          style={[style.logo, {width: width * 0.6, height: height * 0.3}]}
          resizeMode="contain"
        />
        <View style={style.inputContainer}>
          <Input placeHolder="Mail giriniz" onChange={handleEmailChange} />
          <Input
            placeHolder="Şifre giriniz"
            onChange={handlePasswordChange}
            secureTextEntry={true}
          />
        </View>
        <MyButton title="Giriş Yap" navigateTo="Home" />
      </SafeAreaView>
    </ImageBackground>
  );
};
export default LoginPage;
