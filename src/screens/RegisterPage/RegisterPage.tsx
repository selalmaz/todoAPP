import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import MyButton from '../../components/mybutton/Mybutton';
import style from './RegisterPage.style';
import {createUserWithEmail} from '../../services/firebase/firebaseAuth';
import {StateType} from '../../redux/TaskStore';
import {StackParamList} from '../../types';
import RegisterHeader from '../../components/login&registerHeader/Login&registerHeader';

const RegisterPage = () => {
  const task = useSelector((state: StateType) => state.Tasks);
  const isLoading = task.isLoading;
  const registerMail = task.registerMail;
  const registerPassword = task.registerPassword;
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={style.background}>
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <SafeAreaView style={style.innerContainer}>
          <ScrollView contentContainerStyle={style.scrollViewContent}>
            <RegisterHeader type="Register" />

            <View style={style.button}>
              {isLoading ? (
                <ActivityIndicator size="large" color="cyan" />
              ) : (
                <MyButton
                  title="Create Account"
                  theme="primary"
                  navigateTo="Home"
                  onPress={() =>
                    createUserWithEmail(
                      registerMail,
                      registerPassword,
                      navigation,
                      dispatch,
                    )
                  }
                />
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegisterPage;
