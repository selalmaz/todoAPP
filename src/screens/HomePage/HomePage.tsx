import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../components/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import styles from './HomePage.style';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeHolder="Task giriniz" onChange={() => {}}></Input>
      <MyButton title="Taski ekle"></MyButton>
    </SafeAreaView>
  );
};

export default HomePage;
