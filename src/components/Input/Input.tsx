import React from 'react';
import {TextInput, View} from 'react-native';
import style from './Input.style';

// props tipi tanımalama
type Props = {
  placeHolder: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean; // şfire için opsiyonel prop
};

const Input = (props: Props) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.Input}
        placeholder={props.placeHolder}
        onChangeText={props.onChange}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default Input;
