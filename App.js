import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screen/HomeScreen';
import Profile from './src/screen/Profile';
import NotificationScreen from './src/screen/NotificationScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#157cdb',
          inactiveTintColor: '#262626',
          labelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang Chủ',
            tabBarIcon: ({color}) => (
              <Icon name="md-home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Thông Báo',
            tabBarIcon: ({color}) => (
              <Icon name="md-notifications-outline" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Cá Nhân',
            tabBarIcon: ({color}) => (
              <Icon name="md-person" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
