import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CardProps, TabParamList} from '../../types';
import HomePage from '../../screens/homePage/Index';
import TodoListPage from '../../screens/taskListPage/Index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TabNavigator.style';
import {useSelector} from 'react-redux';
import {StateType} from '../../redux/TaskStore';

const Tab = createBottomTabNavigator<TabParamList>();
let taskCount: number = 0;

const TabNavigator = () => {
  const userTask = useSelector((state: StateType) => state.Tasks.userTaskItems);
  taskCount = userTask.filter(task => !task.isChecked).length;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ToDoListPage"
        component={TodoListPage}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: taskCount,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
