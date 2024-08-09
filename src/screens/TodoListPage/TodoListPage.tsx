import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import TaskCard from '../../components/TaskCard';
import style from './TodoListPage.style';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';

const TodoListPage = () => {
  const {gorevler} = useSelector((state: StateType) => state.tasklist);
  const renderItem = ({item}: {item: string}) => <TaskCard task={item} />;

  return (
    <SafeAreaView style={style.container}>
      <View style={style.innerContainer}>
        <Text style={style.header}>Görevler</Text>
        <View style={style.taskContainer}>
          <FlatList data={gorevler} renderItem={renderItem}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TodoListPage;
