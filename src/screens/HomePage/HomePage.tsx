import React from 'react';
import {SafeAreaView} from 'react-native';
import Input from '../../components/Input';
import MyButton from '../../components/Mybutton/Mybutton';
import styles from './HomePage.style';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {setGorev, setGorevler} from '../../redux/Slice';

const HomePage = () => {
  const {gorev, gorevler} = useSelector((state: StateType) => state.tasklist);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeHolder="Task giriniz"
        onChange={text => dispatch(setGorev(text))}
      />
      <MyButton
        title="Taski ekle"
        onPress={() => dispatch(setGorevler(gorev))}
      />
    </SafeAreaView>
  );
};

export default HomePage;
