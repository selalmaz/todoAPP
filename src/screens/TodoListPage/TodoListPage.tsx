import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import TaskCard from '../../components/TaskCard';
import style from './TodoListPage.style';

const TodoListPage = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.innerContainer}>
        <Text style={style.header}>Görevler</Text>
        <View style={style.taskContainer}>
          <TaskCard task="ammo"></TaskCard>
          <TaskCard task="ammo"></TaskCard>
          <TaskCard task="ammo"></TaskCard>
          <TaskCard task="ammo"></TaskCard>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TodoListPage;
