import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StackParamList} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import style from './Mybutton.style';

type Props = {
  title: string;
  navigateTo?: keyof StackParamList; // navigate işlemi için
  onPress?: () => void; //
};

const MyButton = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handlePress() {
    if (props.navigateTo) {
      navigation.navigate(props.navigateTo);
    }
  }

  return (
    <TouchableOpacity
      style={style.button}
      onPress={props.onPress || handlePress}>
      <Text style={style.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
