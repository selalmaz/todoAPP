import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import MyButton from '../../components/mybutton/Mybutton';
import style from './LoginPage.style';
import {signUpWithEmail} from '../../services/firebase/firebaseAuth';
import {StateType} from '../../redux/TaskStore';
import {StackParamList} from '../../types';
import LoginHeader from '../../components/login&registerHeader/Login&registerHeader';

const LoginPage = () => {
  const task = useSelector((state: StateType) => state.Tasks);

  const isLoading = task.isLoading;
  const loginMail = task.loginMail;
  const loginPassword = task.loginPassword;
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={style.background}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <SafeAreaView style={style.innerContainer}>
          <ScrollView contentContainerStyle={style.scrollViewContent}>
            <LoginHeader type="Login" />
            <View style={style.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={{alignSelf: 'flex-end'}}>
                <Text style={style.signUpText}>Create Account</Text>
              </TouchableOpacity>
              {isLoading ? (
                <ActivityIndicator size="large" color="cyan" />
              ) : (
                <MyButton
                  title="Login"
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
