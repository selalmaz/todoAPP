import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StackParamList} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import style from './Mybutton.style';
import {buttonProps} from '../../types';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';

const MyButton = (props: buttonProps) => {
  const isLoading = useSelector((state: StateType) => state.loading.isLoading);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handlePress() {
    if (props.navigateTo) {
      navigation.navigate(props.navigateTo);
    }
  }

  return (
    <TouchableOpacity
      style={style[props.theme].button}
      onPress={props.onPress || handlePress}>
      {isLoading ? (
        <ActivityIndicator size="large" color="red"></ActivityIndicator>
      ) : (
        <Text style={style[props.theme].buttonText}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MyButton;
