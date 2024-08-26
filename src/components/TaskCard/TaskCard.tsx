import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useDispatch} from 'react-redux';
import {
  deleteTodoById,
  updateTaskStatus,
} from '../../services/firebase/firebaseDatabase';
import style from './TaskCard.style';
import {TaskCardProps} from '../../types';
import useAlert from '../../hooks/UseAlert';

const TaskCard = (props: TaskCardProps) => {
  const dispatch = useDispatch();

  const handleDelete = useAlert(
    'Warning',
    'Are you sure you want to delete this task?',
    async () => {
      await deleteTodoById(props.id, dispatch);
    },
  );

  return (
    <View style={[style.container, props.isChecked && style.checked]}>
      <CheckBox
        onClick={() => updateTaskStatus(props.id, !props.isChecked, dispatch)}
        isChecked={props.isChecked}
        style={style.checkbox}
        checkBoxColor="#3B82F6"
      />
      <Text style={[style.task, props.isChecked && style.checkedText]}>
        {props.task}
      </Text>
      <TouchableOpacity onPress={handleDelete} style={style.deleteButton}>
        <Text style={style.deleteButtonText}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
