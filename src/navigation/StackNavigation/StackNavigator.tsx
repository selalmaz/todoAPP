import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackParamList} from '../../types';
import LoginPage from '../../screens/LoginPage';
import TabNavigator from '../TabNavigation/TabNavigator';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
