import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountPage from '../screens/Account';

const Stack = createStackNavigator()

export default function PokedexNavigation(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='Account' component={AccountPage} options={{title:'Mi cuenta'}}/>
    </Stack.Navigator>
  )

}