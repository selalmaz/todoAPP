import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import TaskCard from '../../components/TaskCard';
import style from './TodoListPage.style';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {readData} from '../../services/firebase/database';
import {CardProps} from '../../types';

const {width, height} = Dimensions.get('window');
let count: number = 0;

const TodoListPage = () => {
  const [tasks, setTasks] = useState<CardProps[]>([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await readData(dispatch);
    setTasks(data);
    count = data.filter(task => !task.isChecked).length;
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
          <Text style={style.header}>Görevler (Aktif görevler: {count})</Text>
          <View style={style.taskContainer}>
            <FlatList
              data={tasks}
              renderItem={({item}) => <TaskCard {...item}></TaskCard>}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TodoListPage;
