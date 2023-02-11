import React, {useState, useEffect} from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { getPokemonDataApi } from '../api/pokemon';
import getColorByPokemonType from '../utils/getColorByPokemonType';
import Header from '../components/pokemon/Header';
import Type from '../components/pokemon/Type';
import Stats from '../components/pokemon/Stats';

export default function Pokemon({route: {params}, navigation}) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=> null,
      headerLeft: ()=>(
      <FontAwesome5 
      name='arrow-left' 
      color='#fff' 
      size={20} 
      style={{padding: 15}}
      onPress={navigation.goBack} />
    )
    })
    
  },[navigation, params])

  useEffect(()=>{
    (async () => {
      try {
        const response = await getPokemonDataApi(params.id);
        const image = response.sprites.other['official-artwork'].front_default;
        const type = response.types[0].type.name;
        setPokemon(response);
      } catch (error) {
        navigation.goBack()
      }
    })()

  },[params])


  if(pokemon.length !== 0) {
    const color = getColorByPokemonType(pokemon.types[0].type.name)
    return (
      <SafeAreaView>
        <ScrollView>
          <Header 
            name={pokemon.name} 
            order={pokemon.order} 
            image={pokemon.sprites.other['official-artwork'].front_default} 
            type={pokemon.types[0].type.name}
            color={color}
            />
          <Type types={pokemon.types}/>
          <Stats 
            stats={pokemon.stats}
            color={color}

          />
        </ScrollView>
      </SafeAreaView>
        
  )}
}