import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackParamList} from '../../types';
import LoginPage from '../../screens/LoginPage';
import TabNavigator from '../TabNavigation/TabNavigator';
import RegisterPage from '../../screens/RegisterPage';
import GetApiPage from '../../screens/getApiPage/getApiPage';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Api">
        <Stack.Screen name="Api" component={GetApiPage}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterPage}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
