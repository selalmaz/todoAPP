import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../../components/Input/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import style from './LoginPage.style';
import {signInUser} from '../../services/firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';

const MAIL: string = 'ahmet@deneme.com';
const PASSWORD: string = '123456789';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {width, height} = Dimensions.get('window');

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handleRegister() {
    navigation.navigate('Register');
  }
  const handleLogin = () => {
    signInUser(email, password, navigation);
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
          <Input placeHolder="Mail giriniz" onChange={mail => setEmail(mail)} />
          <Input
            placeHolder="Şifre giriniz"
            onChange={password => setPassword(password)}
            secureTextEntry={true}
          />
        </View>

        <View style={style.buttonContainer}>
          <TouchableOpacity onPress={handleRegister} style={style.signUpButton}>
            <Text style={style.signUpText}>Hesap Oluştur</Text>
          </TouchableOpacity>
          <MyButton title="Giriş Yap" onPress={handleLogin} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default LoginPage;
