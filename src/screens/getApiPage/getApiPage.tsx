import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import ApiCard from '../../components/ApiCard';
import styles from './getApiPage.style';
import {fetchData} from '../../services/axios/getData';
import {useDispatch, useSelector} from 'react-redux';
import {ApiCardProps} from '../../types';
import {StateType} from '../../redux/Store';

const GetApiPage = () => {
  const loading = useSelector((state: StateType) => state.loading.isLoading);

  const dispatch = useDispatch();
  const [todos, setTodos] = useState<ApiCardProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(dispatch);
      setTodos(data);
    };

    getData();
  }, []);

  return (
    <View style={{flex: 1, padding: 20}}>
      {loading ? (
        <ActivityIndicator size="large" color="cyan"></ActivityIndicator>
      ) : (
        <FlatList data={todos} renderItem={({item}) => <ApiCard {...item} />} />
      )}
    </View>
  );
};

export default GetApiPage;
