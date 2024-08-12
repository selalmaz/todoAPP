import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import style from './TaskCard.style';
import {CardProps} from '../../types';
import {removeTask} from '../../redux/Slice';

import CheckBox from 'react-native-check-box';
import {useDispatch} from 'react-redux';

const TaskCard = (props: CardProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispact = useDispatch();

  const handleDelete = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispact(removeTask(props.task))},
    ]);

  return (
    <View style={[style.container, isChecked && style.checked]}>
      <View style={style.innerContainer}>
        <CheckBox
          onClick={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
          style={style.checkbox}
          checkBoxColor="#3B82F6"
        />
        <Text style={[style.task, isChecked && style.checkedText]}>
          {props.task}
        </Text>
        <TouchableOpacity onPress={handleDelete} style={style.deleteButton}>
          <Text style={style.deleteButtonText}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskCard;
