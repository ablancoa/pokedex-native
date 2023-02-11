import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';
import FavoriteNavigation from './FavoriteNavigation';

export default function Navigation () {
  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator initialRouteName='Pokedex' >
      <Tab.Screen name="Account" component={AccountNavigation} options={{
        tabBarLabel: "Cuenta",
          tabBarIcon: ({focused, size, color}) => {
            // Metodo para colocar dos iconos si esta focalizado
            let iconName;
            iconName = focused 
              ? 'user' 
              : 'user';
            return <FontAwesome5 name={iconName} size={size} color={color}/>
            }
        }}/>
      <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: () => renderPokeball()
      }}/>
      <Tab.Screen name='Favorites' component={FavoriteNavigation} options={{
        tabBarLabel: "Favoritos",
        //Metodo para colocar un solo icono
        tabBarIcon: ({size, color}) => {
          return <FontAwesome5 name='heart' size={size} color={color}/>
          }
      }}/>
    </Tab.Navigator>
  )
}

function renderPokeball(){
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{width: 75, height: 75, top: -15}}
    />
  )
}