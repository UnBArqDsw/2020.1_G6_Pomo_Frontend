import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './pages/Main';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          resetOnBlur: true,
          activeTintColor: '#fff',
          keyboardHidesTabBar: true,
          inactiveTintColor: 'rgba(255,255,255,0.6)',
          style: {
            backgroundColor: '#8d41a8',
          },
        }}>
        <Tab.Screen
          name="Dashboard"
          component={Main}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={20} name="event" />
            ),
            tabBarLabel: 'Agendamentos',
          }}
        />
        <Tab.Screen
          name="New"
          component={Main}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={20} name="add-circle-outline" />
            ),
            tabBarLabel: 'Agendar',
            tabBarVisible: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Main}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={20} name="person" />
            ),
            tabBarLabel: 'Meu Perfil',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
