import React, { useState } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './src/pages/Contacts';
import Information from './src/pages/Information';
import Registration from './src/pages/Registration';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  [dados, setDados] = useState([]);

  function Tabs(){
    return(
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Registration') {
            iconName = focused
              ? 'person-add-outline'
              : 'person-add-outline';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'people-outline' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#A9A9A9',
      })}
      >
        <Tab.Screen name='Registration' component={Registration}
        options={
          {
            title: 'ADICIONAR CONTATO',
            headerStyle:{
              backgroundColor: '#F0F0F0',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              borderBottomWidth: 1,
            },
            initialParams: { dados, setDados }
          }
        }

        />
        <Tab.Screen name='Contacts' component={Contacts}
        options={
          {
            title: 'SEUS CONTATOS',
            headerStyle:{
              backgroundColor: '#F0F0F0',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              borderBottomWidth: 1,
            },
            initialParams: { dados, setDados }
          }
        }
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#000000"
      />

      <Stack.Navigator screenOptions={{
          animationEnabled: false,
        }}>
        <Stack.Screen name="Tabs" component={Tabs}
        animeted
        options={
          {
          title: 'SUA AGENDA',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }
        } />
        <Stack.Screen name="Information" component={Information}
        options={
          {
            title: 'INFORMAÇÕES',
            headerStyle:{
              backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
