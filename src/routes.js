import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions} from '@react-navigation/native';

// importa as telas
import Main from './pages/Menssage';
import Preferencias from './pages/Preferencias';
import Social from './pages/Social';
import Login from './pages/Login';
import Stats from './pages/Stats';
import Chat from './pages/Chat';
import Register from './pages/Register';
import Recovery from './pages/Recovery';
import Timer from './pages/Timer';

//====================================

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export function LSocial({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerTintColor: '#333',
      }}>
      <Stack.Screen name="Social" options={{title: ''}} component={Social} />
      <Stack.Screen name="lchat" options={{title: ''}} component={ListChat} />
    </Stack.Navigator>
  );
}

export function ListChat({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerTintColor: '#333',
      }}>
      <Stack.Screen
        name="chats"
        component={Main}
        options={{
          title: 'Menssages',
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => {
          //       // navigation.dispatch(CommonActions.goBack());
          //     }}>
          //     <Icon name="chevron-left" size={20} color="#333" />
          //   </TouchableOpacity>
          // ),
        }}
      />
      <Stack.Screen name="Chat" options={{title: ''}} component={LMensage} />
    </Stack.Navigator>
  );
}

export function LMensage({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarVisible: false,
        gestureEnabled: false,
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerTintColor: '#333',
      }}>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Usuario',
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => {
          //       navigation.dispatch(CommonActions.goBack());
          //     }}>
          //     <Icon name="chevron-left" size={20} color="#333" />
          //   </TouchableOpacity>
          // ),
        }}
      />
    </Stack.Navigator>
  );
}
export default function Routes({isSigned}) {
  var nav1;
  function getTabBarVisible(route) {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'Main';

    if (routeName === 'lchat') {
      return false;
    }
    return true;
  }

  switch (isSigned) {
    case true:
      nav1 = (
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
          {}
          <Tab.Screen
            name="Stats"
            component={Stats}
            options={{
              tabBarIcon: ({color}) => (
                <Icon color={color} size={32} name="stacked-line-chart" />
              ),
            }}
          />
          <Tab.Screen
            name="Timer"
            component={Timer}
            options={{
              tabBarIcon: ({color}) => (
                <Icon color={color} size={32} name="timer" />
              ),
            }}
          />
          <Tab.Screen
            name="Social"
            component={LSocial}
            options={({route}) => ({
              tabBarVisible: getTabBarVisible(route),
              tabBarIcon: ({color}) => (
                <Icon color={color} size={32} name="groups" />
              ),
            })}
          />
          <Tab.Screen
            name="Preferencias"
            component={Preferencias}
            options={{
              tabBarIcon: ({color}) => (
                <Icon color={color} size={32} name="person" />
              ),
            }}
          />
        </Tab.Navigator>
      );
      break;
    case false:
      nav1 = (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={Login} />

          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Recovery" component={Recovery} />
        </Stack.Navigator>
      );
      break;
    case 2:
      break;
    default:
      break;
  }
  return <NavigationContainer>{nav1}</NavigationContainer>;
}
