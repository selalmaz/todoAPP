import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/input/Input';
import MyButton from '../../components/mybutton/Mybutton';
import style from './LoginPage.style';
import {signUpWithEmail} from '../../services/firebase/firebaseAuth';
import {StackParamList} from '../../types';
import {StateType} from '../../redux/TaskStore';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {width, height} = Dimensions.get('window');
  const isLoading = useSelector((state: StateType) => state.Tasks.isLoading);

  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handleRegister() {
    navigation.navigate('Register');
  }

  function handleLogin() {
    signUpWithEmail(email, password, navigation, dispatch);
    setEmail('');
    setPassword('');
  }

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={style.background}>
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <SafeAreaView style={style.innerContainer}>
          <ScrollView contentContainerStyle={style.scrollViewContent}>
            <View style={style.logoContainer}>
              <Image
                source={require('../../assets/images/logo_list.png')}
                style={{
                  width: width * 0.6,
                  height: height * 0.3,
                }}
                resizeMode="contain"
              />
            </View>

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

            <View style={style.buttonContainer}>
              <TouchableOpacity
                onPress={handleRegister}
                style={style.signUpButton}>
                <Text style={style.signUpText}>Hesap Oluştur</Text>
              </TouchableOpacity>
              {isLoading ? (
                <ActivityIndicator size="large" color="cyan" />
              ) : (
                <MyButton
                  title="Giriş Yap"
                  onPress={handleLogin}
                  theme="primary"
                />
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginPage;
