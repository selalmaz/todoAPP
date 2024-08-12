import React, {useState} from 'react';
import {Switch, Text, Touchable} from 'react-native';
import {View} from 'react-native';
import style from './TaskCard.style';
import {CardProps} from '../../types';
import CheckBox from 'react-native-check-box';

const TaskCard = (props: CardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <CheckBox
          onClick={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
          style={style.checkbox}
          checkBoxColor="#3B82F6"
        />
        <Text style={style.task}>{props.task}</Text>
      </View>
    </View>
  );
};

export default TaskCard;
