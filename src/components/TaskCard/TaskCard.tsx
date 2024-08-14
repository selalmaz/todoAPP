import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {completeTask, unCompleteTask} from '../../redux/Slice';
import {deleteTask, updateDB} from '../../services/firebase/database';
import style from './TaskCard.style';
import {CardProps} from '../../types';
import {ActivityIndicator} from 'react-native';

const TaskCard = (props: CardProps) => {
  const isLoading = useSelector((state: StateType) => state.loading.isLoading);

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
          await deleteTask(props.id, dispact);
        },
      },
    ]);
  const handleComplete = () => {
    if (!props.isChecked) {
      dispact(completeTask());
      updateDB(props.id, true, dispact);
    } else {
      dispact(unCompleteTask());
      updateDB(props.id, false, dispact);
    }
  };

  const handleDeletePress = props.isChecked ? () => {} : handleDelete;

  return (
    <View style={[style.container, props.isChecked && style.checked]}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#bdbdbd"></ActivityIndicator>
      ) : (
        <View style={style.innerContainer}>
          <CheckBox
            onClick={handleComplete}
            isChecked={props.isChecked}
            style={style.checkbox}
            checkBoxColor="#3B82F6"
          />
          <Text style={[style.task, props.isChecked && style.checkedText]}>
            {props.task}
          </Text>
          <TouchableOpacity
            onPress={handleDeletePress}
            style={style.deleteButton}>
            <Text style={style.deleteButtonText}>x</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TaskCard;
