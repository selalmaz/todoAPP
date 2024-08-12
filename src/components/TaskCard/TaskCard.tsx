import React from 'react';
import {Text, Touchable} from 'react-native';
import {View} from 'react-native';
import style from './TaskCard.style';
import {CardProps} from '../../types';

const TaskCard = (props: CardProps) => {
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
