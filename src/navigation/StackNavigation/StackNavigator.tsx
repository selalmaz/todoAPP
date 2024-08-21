import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackParamList} from '../../types';
import LoginPage from '../../screens/loginPage/Index';
import TabNavigator from '../tabNavigation/TabNavigator';
import RegisterPage from '../../screens/registerPage/Index';
import GetApiPage from '../../screens/getApiPage/GetApiPage';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Api" component={GetApiPage}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterPage}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
