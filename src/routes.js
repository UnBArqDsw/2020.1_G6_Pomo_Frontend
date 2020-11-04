import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// importa as telas
import Main from './pages/Main';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          resetOnBlur: true,
          activeTintColor: '#e91e63',
          keyboardHidesTabBar: true,
          inactiveTintColor: '#000000',
          showLabel: false,
          style: {
            backgroundColor: '#e0e0e0',
            borderTopLeftRadius: 26,
            borderTopRightRadius: 26,
            position: 'absolute',
            bottom: 0,
            padding: 10,
          },
        }}>
        {/* cada tabScreen e um icone da navbar. so mudar o nome do compoente */}
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={32} name="playlist-add-check" />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={Main}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={32} name="stacked-line-chart" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Main}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={32} name="timer" />
            ),
          }}
        />
        <Tab.Screen
          name="x"
          component={Main}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={32} name="groups" />
            ),
          }}
        />
        <Tab.Screen
          name="xx"
          component={Main}
          options={{
            tabBarIcon: ({color}) => (
              <Icon color={color} size={32} name="person" />
            ),
            tabBarLabel: 'Meu Perfil',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
