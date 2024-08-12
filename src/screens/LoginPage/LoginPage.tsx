import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
} from 'react-native';
import Input from '../../components/Input/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import style from './LoginPage.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert('Hata', 'Mail adresini giriniz.');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Hata', 'Şifre giriniz.');
      return;
    }

    navigation.navigate('Home');
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
        <MyButton title="Giriş Yap" navigateTo="Home" onPress={handleLogin} />
      </SafeAreaView>
    </ImageBackground>
  );
};
export default LoginPage;
