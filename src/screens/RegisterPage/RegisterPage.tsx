import React, {useState} from 'react';
import {Button, Dimensions, Image, ImageBackground, View} from 'react-native';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../components/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import style from './RegisterPage.style';
import {createUser} from '../../services/firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';

const RegisterPage = () => {
  const {width, height} = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function pressButton() {
    createUser(email, password, navigation);
  }

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
          <Input
            placeHolder="Mail giriniz"
            onChange={mail => setEmail(mail)}
            value={email}
          />
          <Input
            placeHolder="Şifre giriniz"
            value={password}
            onChange={password => setPassword(password)}
            secureTextEntry={true}
          />
        </View>
        <MyButton
          title="Hesap Olustur"
          navigateTo="Home"
          onPress={pressButton}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RegisterPage;
