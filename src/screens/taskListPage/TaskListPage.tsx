import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import TaskCard from '../../components/taskCard/Index';
import style from './TaskListPage.style';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTaskData} from '../../services/firebase/firebaseDatabase';
import {setUserTasks} from '../../redux/TaskSlice';
import {StateType} from '../../redux/TaskStore';

const {width, height} = Dimensions.get('window');
let userTaskCount: number = 0;

const TodoListPage = () => {
  const state = useSelector((state: StateType) => state.Tasks);
  const isLoading = state.isLoading;
  const userTasks = state.userTaskItems;
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(setUserTasks(await fetchTaskData()));
    userTaskCount = userTasks.filter(task => !task.isChecked).length;
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <SafeAreaView style={style.container}>
      <ImageBackground
        style={[{width: width, height: height}, style.background]}
        source={require('../../assets/images/background.jpg')}
        resizeMode="cover">
        <View style={style.innerContainer}>
          <Text style={style.header}>
            Görevler (Aktif görevler: {userTaskCount})
          </Text>
          <View style={style.taskContainer}>
            {isLoading ? (
              <ActivityIndicator size="large" color="cyan"></ActivityIndicator>
            ) : (
              <FlatList
                data={userTasks}
                renderItem={({item}) => <TaskCard {...item}></TaskCard>}
                keyExtractor={item => item.id}
              />
            )}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TodoListPage;
