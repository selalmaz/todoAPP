import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import style from './TaskCard.style';
import {CardProps} from '../../types';
import {
  removeTask,
  completeTask,
  unCompleteTask,
  toggleCheck,
} from '../../redux/Slice';

import CheckBox from 'react-native-check-box';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';

const TaskCard = (props: CardProps) => {
  const dispact = useDispatch();

  const taskState = useSelector((state: StateType) => state.tasklist);
  const task = taskState.gorevler.find(gorev => gorev.task === props.task);
  let isChecked: boolean;
  if (task) {
    isChecked = task.isChecked;
  } else {
    isChecked = false;
  }

  const handleDelete = () =>
    Alert.alert('Uyarı', 'Görevi silmek istediğinizden emin misiniz?', [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {
        text: 'Tamam',
        onPress: () => dispact(removeTask(props.task)),
      },
    ]);

  function handleComplete() {
    dispact(toggleCheck(props.task));
    if (!isChecked) {
      dispact(completeTask());
    } else {
      dispact(unCompleteTask());
    }
  }

  const handleDeletePress = isChecked ? () => {} : handleDelete;
  return (
    <View style={[style.container, isChecked && style.checked]}>
      <View style={style.innerContainer}>
        <CheckBox
          onClick={handleComplete}
          isChecked={isChecked}
          style={style.checkbox}
          checkBoxColor="#3B82F6"
        />
        <Text style={[style.task, isChecked && style.checkedText]}>
          {props.task}
        </Text>
        <TouchableOpacity
          onPress={handleDeletePress}
          style={style.deleteButton}>
          <Text style={style.deleteButtonText}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskCard;
