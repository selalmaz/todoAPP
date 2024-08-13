import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {Check, completeTask, unCompleteTask} from '../../redux/Slice';
import {deleteTask, updateDB} from '../../services/firebase/database';
import style from './TaskCard.style';
import {CardProps} from '../../types';

const TaskCard = (props: CardProps) => {
  const {check} = useSelector((state: StateType) => state.tasklist);
  const dispact = useDispatch();

  const handleDelete = () =>
    Alert.alert('Uyarı', 'Görevi silmek istediğinizden emin misiniz?', [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {
        text: 'Tamam',
        onPress: async () => {
          await deleteTask(props.id);
        },
      },
    ]);
  const handleComplete = () => {
    dispact(Check(check));
    if (!check) {
      console.log('1         ' + check);
      dispact(completeTask());
      updateDB(props.id, true);
    } else {
      dispact(unCompleteTask());
      console.log('2         ' + check);
      updateDB(props.id, false);
    }
  };

  const handleDeletePress = check ? () => {} : handleDelete;

  return (
    <View style={[style.container, check && style.checked]}>
      <View style={style.innerContainer}>
        <CheckBox
          onClick={handleComplete}
          isChecked={check}
          style={style.checkbox}
          checkBoxColor="#3B82F6"
        />
        <Text style={[style.task, check && style.checkedText]}>
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
