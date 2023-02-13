import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesPage from '../screens/Favorites';
import PokemonPage from '../screens/Pokemon'

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Favorite' 
        component={FavoritesPage} 
        options={{title:'Favoritos'}}
      />
      <Stack.Screen 
        name='Pokemon' 
        component={PokemonPage} 
        options={{
          title:'',
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}