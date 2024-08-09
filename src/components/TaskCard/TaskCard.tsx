import React from 'react';
import {Text, Touchable} from 'react-native';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import style from './TaskCard.style';

type Props = {
  task: string;
};

const TaskCard = (props: Props) => {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <View style={style.Square}></View>
        <Text style={style.task}>{props.task}</Text>
      </View>
    </View>
  );
};

export default TaskCard;
