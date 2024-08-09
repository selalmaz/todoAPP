import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../../types';
import HomePage from '../../screens/HomePage';
import TodoListPage from '../../screens/TodoListPage';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ToDoListPage" component={TodoListPage} />
      <Tab.Screen name="HomePage" component={HomePage} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
