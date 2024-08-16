import React from 'react';
import {Text, View} from 'react-native';
import styles from './ApiCard.style';

import {ApiCardProps} from '../../types';

const ApiCard = (props: ApiCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.age}</Text>
      <Text style={styles.completed}>{props.name}</Text>
    </View>
  );
};

export default ApiCard;
