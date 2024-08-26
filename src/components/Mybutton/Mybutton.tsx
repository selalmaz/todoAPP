import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './Mybutton.style';
import {buttonProps} from '../../types';

const MyButton = (props: buttonProps) => {
  return (
    <TouchableOpacity style={style[props.theme].button} onPress={props.onPress}>
      <Text style={style[props.theme].buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
