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
import {setGorev, setGorevler} from '../../redux/Slice';

const HomePage = () => {
  const {gorev, gorevler} = useSelector((state: StateType) => state.tasklist);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(gorev);

  // Ekran boyutlarını almak için
  const {width, height} = Dimensions.get('window');
  function onPress() {
    dispatch(setGorevler(inputValue));
    setInputValue(''); // Input değerini sıfırla
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
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;
