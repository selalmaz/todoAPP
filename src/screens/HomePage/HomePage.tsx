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
import Input from '../../components/input/Index';
import MyButton from '../../components/mybutton/Mybutton';
import {signOutUser} from '../../services/firebase/firebaseAuth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';
import {addTaskToDatabase} from '../../services/firebase/firebaseDatabase';
import {useDispatch, useSelector} from 'react-redux';
import styles from './HomePage.style';
import {StateType} from '../../redux/TaskStore';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const dispatch = useDispatch();

  const {width, height} = Dimensions.get('window');

  function onPress() {
    addTaskToDatabase(inputValue, dispatch);
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
