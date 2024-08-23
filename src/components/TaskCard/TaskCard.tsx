import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/TaskStore';
import {
  deleteTodoById,
  updateTaskStatus,
} from '../../services/firebase/firebaseDatabase';
import style from './TaskCard.style';
import {TaskCardProps} from '../../types';
import useAlert from '../../hooks/UseAlert';

const TaskCard = (props: TaskCardProps) => {
  const dispact = useDispatch();

  const handleDelete = useAlert(
    'Uyarı',
    'Görevi silmek istediğinizden emin misiniz?',
    async () => {
      await deleteTodoById(props.id, dispact);
    },
  );

  return (
    <View style={[style.container, props.isChecked && style.checked]}>
      <View style={style.innerContainer}>
        <CheckBox
          onClick={() => updateTaskStatus(props.id, !props.isChecked, dispact)}
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
    </View>
  );
};

export default TaskCard;
