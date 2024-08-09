import React from 'react';
import {TextInput, View} from 'react-native';
import style from './Input.style';

// props tipi tanımalama
type Props = {
  placeHolder: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean; // şfire için opsiyonel prop
};

const Input: React.FC<Props> = ({placeHolder, onChange, secureTextEntry}) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.Input}
        placeholder={placeHolder}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
