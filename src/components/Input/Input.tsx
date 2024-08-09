import React from 'react';
import {TextInput, View} from 'react-native';
import style from './Input.style';

// props tipi tanımalama
type Props = {
  placeHolder: string;
  value?: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean; // şifre için opsiyonel prop
};

const Input = (props: Props) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.Input}
        placeholder={props.placeHolder}
        onChangeText={props.onChange}
        secureTextEntry={props.secureTextEntry} // Varsayılan değer
      />
    </View>
  );
};

export default Input;
