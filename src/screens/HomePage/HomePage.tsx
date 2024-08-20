import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Input from '../../components/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import {signOutUser} from '../../services/firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';
import {adDB} from '../../services/firebase/database';
import {useDispatch} from 'react-redux';
import styles from './HomePage.style';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const dispatch = useDispatch();

  const {width, height} = Dimensions.get('window');

  function onPress() {
    adDB(inputValue, dispatch);
    setInputValue(''); // Input değerini sıfırla
    Keyboard.dismiss(); // Klavyeyi kapat
  }

  function signOut() {
    signOutUser(navigation, dispatch);
  }

  return (
    <ImageBackground
      style={[styles.background, {width, height}]}
      source={require('../../assets/images/background.jpg')}
      resizeMode="cover">
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <SafeAreaView style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo_list.png')}
              style={[{width: width * 0.5, height: height * 0.3}]}
              resizeMode="contain"
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              placeHolder="Task giriniz"
              value={inputValue}
              onChange={text => setInputValue(text)}
            />
            <MyButton title="Taski ekle" onPress={onPress} theme="primary" />
            <MyButton title="Çıkış Yap" onPress={signOut} theme="secondry" />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default HomePage;
