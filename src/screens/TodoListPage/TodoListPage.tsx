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
import {useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {readData} from '../../services/firebase/database';
import {TaskType} from '../../types';

const {width, height} = Dimensions.get('window');

const TodoListPage = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const {gorevler, complete} = useSelector(
    (state: StateType) => state.tasklist,
  );

  const renderItem = ({
    item,
  }: {
    // flatlist render icin
    item: {task: string; isChecked: boolean; id: string};
  }) => <TaskCard task={item.task} id={item.id} />;

  const fetchData = async () => {
    const data = await readData();
    setTasks(data);
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
            Görevler (Aktif görevler: {gorevler.length - complete})
          </Text>
          <View style={style.taskContainer}>
            <FlatList
              data={tasks}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TodoListPage;
