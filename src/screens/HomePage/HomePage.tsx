import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
} from 'react-native';
import Input from '../../components/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import styles from './HomePage.style';
import {signOutUser} from '../../services/firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';
import {adDB} from '../../services/firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const dispatch = useDispatch();

  // Ekran boyutlarını almak için
  const {width, height} = Dimensions.get('window');
  function onPress() {
    adDB(inputValue, dispatch);
    //dispatch(setTasks(inputValue));
    setInputValue(''); // Input değerini sıfırla
  }
  function signOut() {
    signOutUser(navigation, dispatch);
  }

  return (
    <ImageBackground
      style={[styles.background, {width, height}]}
      source={require('../../assets/images/background.jpg')}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo_list.png')}
            style={[styles.logo, {width: width * 0.5, height: height * 0.3}]}
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
          <MyButton
            title="Çıkış Yap"
            onPress={signOut}
            theme="secondry"></MyButton>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;
