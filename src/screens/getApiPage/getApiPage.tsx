import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import ApiCard from '../../components/apiCard/Index';
import styles from './GetApiPage.style';
import {fetchData} from '../../services/axios/getData';
import {useDispatch, useSelector} from 'react-redux';
import {ApiCardProps} from '../../types';
import {StateType} from '../../redux/TaskStore';
import Input from '../../components/input/Index';
import MyButton from '../../components/mybutton/Mybutton';

const GetApiPage = () => {
  const loading = useSelector((state: StateType) => state.Tasks.isLoading);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const data = useSelector((state: StateType) => state.Tasks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  const renderItem = ({item}: {item: ApiCardProps}) => (
    <ApiCard age={item.age} id={item.id} name={item.name} />
  );

  function saveData() {
    console.warn(name, surname);
  }

  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'cyan'}}>
      {loading ? (
        <ActivityIndicator size="large" color="cyan"></ActivityIndicator>
      ) : (
        <FlatList data={data} renderItem={renderItem}></FlatList>
      )}
      <View
        style={{backgroundColor: 'red', padding: 5, margin: 5, height: '45%'}}>
        <Input
          value={name}
          placeHolder="adinizi giriniz"
          inputMode="text"
          onChange={text => setName(text)}></Input>
        <Input
          inputMode="text"
          placeHolder="soyadinizi giriniz"
          value={surname}
          onChange={text => setSurname(text)}></Input>
        <MyButton
          title="veri ekle"
          theme="secondry"
          onPress={saveData}></MyButton>
      </View>
    </View>
  );
};

export default GetApiPage;
