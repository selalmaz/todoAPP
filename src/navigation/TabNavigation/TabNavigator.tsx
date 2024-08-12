import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../../types';
import HomePage from '../../screens/HomePage';
import TodoListPage from '../../screens/TodoListPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TabNavigator.style';
import {useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const {gorevler} = useSelector((state: StateType) => state.tasklist);
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
          tabBarBadge: gorevler.length,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
