import React from 'react'

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './src/pages/Contacts';
import Information from './src/pages/Information';
import Registration from './src/pages/Registration';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Registration' component={Registration}
      options={
        {
          title: 'REGISTRO',
          headerStyle:{
            backgroundColor: '#333333',
          },
          headerTintColor:'#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          }
        }
      }

      />
      <Tab.Screen name='Contacts' component={Contacts}
      options={
        {
          title: 'CONTATOS',
          headerStyle:{
            backgroundColor: '#333333',
          },
          headerTintColor:'#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          }
        }
      }
      />
    </Tab.Navigator>
  )
}

export default function App() {
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
