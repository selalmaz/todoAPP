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
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {setTasks} from '../../redux/Slice';
import {signOutUser} from '../../services/firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../../types';

const HomePage = () => {
  const {gorevler} = useSelector((state: StateType) => state.tasklist);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  // Ekran boyutlarını almak için
  const {width, height} = Dimensions.get('window');
  function onPress() {
    dispatch(setTasks(inputValue));
    setInputValue(''); // Input değerini sıfırla
  }
  function signOut() {
    signOutUser(navigation);
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
          <MyButton title="Taski ekle" onPress={onPress} />
          <MyButton title="Çıkış Yap" onPress={signOut}></MyButton>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;
