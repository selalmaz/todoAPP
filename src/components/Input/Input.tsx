import React from 'react';
import {TextInput, View} from 'react-native';
import style from './Input.style';
import {inputProps} from '../../types';

const Input = (props: inputProps) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.Input}
        value={props.value}
        placeholder={props.placeHolder}
        onChangeText={props.onChange}
        inputMode={props.inputMode}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default Input;

// mutli cursor alt shift
//  ctrl d
