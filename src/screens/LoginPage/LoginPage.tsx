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
import {setLoginMail, setLoginPassword} from '../../redux/TaskSlice';

const LoginPage = () => {
  const {width, height} = Dimensions.get('window');
  const state = useSelector((state: StateType) => state.Tasks);
  const isLoading = state.isLoading;
  const loginMail = state.loginMail;
  const loginPassword = state.loginPassword;

  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

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
                inputMode="email"
                placeHolder="Mail giriniz"
                onChange={mail => dispatch(setLoginMail(mail))}
                value={loginMail}
              />
              <Input
                placeHolder="Şifre giriniz"
                inputMode="text"
                value={loginPassword}
                onChange={password => dispatch(setLoginPassword(password))}
                secureTextEntry={true}
              />
            </View>

            <View style={style.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={style.signUpButton}>
                <Text style={style.signUpText}>Hesap Oluştur</Text>
              </TouchableOpacity>
              {isLoading ? (
                <ActivityIndicator size="large" color="cyan" />
              ) : (
                <MyButton
                  title="Giriş Yap"
                  onPress={() =>
                    signUpWithEmail(
                      loginMail,
                      loginPassword,
                      navigation,
                      dispatch,
                    )
                  }
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
