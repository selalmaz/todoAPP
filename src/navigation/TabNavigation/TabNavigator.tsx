import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../../types';
import HomePage from '../../screens/HomePage';
import TodoListPage from '../../screens/TodoListPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TabNavigator.style';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
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
          tabBarLabel: 'HomePage',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ToDoListPage"
        component={TodoListPage}
        options={{
          tabBarLabel: 'ToDoListPage',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: 15,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
