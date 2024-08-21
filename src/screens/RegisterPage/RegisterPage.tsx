import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import Input from '../../components/input/Index';
import MyButton from '../../components/mybutton/Mybutton';
import {createUserWithEmail} from '../../services/firebase/firebaseAuth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/TaskStore';
import styles from './RegisterPage.style';

const RegisterPage = () => {
  const {width, height} = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const isLoading = useSelector((state: StateType) => state.Tasks.isLoading);
  const dispatch = useDispatch();

  function pressButton() {
    createUserWithEmail(email, password, navigation, dispatch);
  }

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.background}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView style={styles.innerContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/logo_list.png')}
                style={{
                  width: width * 0.6,
                  height: height * 0.3,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.inputContainer}>
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

            <View style={styles.button}>
              {isLoading ? (
                <ActivityIndicator size="large" color="cyan" />
              ) : (
                <MyButton
                  title="Hesap Oluştur"
                  theme="primary"
                  navigateTo="Home"
                  onPress={pressButton}
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
