import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import Input from '../../components/input/Index';
import MyButton from '../../components/mybutton/Mybutton';
import {signOutUser} from '../../services/firebase/firebaseAuth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';
import {addTaskToDatabase} from '../../services/firebase/firebaseDatabase';
import {useDispatch} from 'react-redux';
import styles from './HomePage.style';
import useAlert from '../../hooks/UseAlert';

const {width, height} = Dimensions.get('window');

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const dispatch = useDispatch();

  const signOut = useAlert(
    'Uyari',
    'Çıkış yapmak istediğinize emin misiniz?',
    () => signOutUser(navigation, dispatch),
  );
  function addToTaskPressButton() {
    addTaskToDatabase(inputValue, dispatch);
    setInputValue('');
    Keyboard.dismiss();
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

            <MyButton
              title="Taski ekle"
              onPress={addToTaskPressButton}
              theme="primary"
            />
            <MyButton title="Çıkış Yap" onPress={signOut} theme="secondry" />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default HomePage;
