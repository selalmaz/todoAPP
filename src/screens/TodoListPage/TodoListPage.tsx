import React from 'react';
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

const TodoListPage = () => {
  const {gorevler, complete} = useSelector(
    (state: StateType) => state.tasklist,
  );
  const renderItem = ({
    item,
  }: {
    item: {task: string; isChecked: boolean; id: string};
  }) => <TaskCard task={item.task} id={item.id} />;
  const {width, height} = Dimensions.get('window');

  return (
    <SafeAreaView style={style.container}>
      <ImageBackground
        style={[{width: width, height: height}, style.background]}
        source={require('../../assets/images/background.jpg')}
        resizeMode="cover">
        <View style={style.innerContainer}>
          <Text style={style.header}>
            Görevler (Aktif görevler:{gorevler.length - complete})
          </Text>
          <View style={style.taskContainer}>
            <FlatList data={gorevler} renderItem={renderItem}></FlatList>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TodoListPage;
