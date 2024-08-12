import React, {useState} from 'react';
import {Switch, Text, Touchable, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import style from './TaskCard.style';
import {CardProps} from '../../types';
import CheckBox from 'react-native-check-box';

const TaskCard = (props: CardProps) => {
  const [isChecked, setIsChecked] = useState(false);
  function handleDelete() {
    console.log('silme tamamlandı');
  }

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
