import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import ApiCard from '../../components/ApiCard';
import styles from './getApiPage.style';

const GetApiPage = () => {
  const [todos, setTodos] = useState([]);

  return (
    <View style={{flex: 1, padding: 20}}>
      <ApiCard id={1} completed userId={5} todo="SDASFDASD"></ApiCard>
      <ApiCard id={1} completed userId={5} todo="SDASFDASD"></ApiCard>
      <ApiCard id={1} completed userId={5} todo="SDASFDASD"></ApiCard>
      <ApiCard id={1} completed userId={5} todo="SDASFDASD"></ApiCard>
      <ApiCard id={1} completed userId={5} todo="SDASFDASD"></ApiCard>
    </View>
  );
};

export default GetApiPage;
