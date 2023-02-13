import React, {useState, useEffect} from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { clearFavorites, getPokemonsFavorites } from '../api/favorites';
import useAuth from '../Hooks/useAuth';
import { getPokemonDataApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import NotLogged from '../components/NotLogged';


export default function Favorites() {
  const [pokemons, setPokemons] = useState([])
  const {auth} = useAuth()

  useEffect(()=>{
    if(auth){
      (async () => {
        const response = await getPokemonsFavorites();
        const pokemonsArray = [];
        for await (const pokemonId of response){
          const pokemonDetails = await getPokemonDataApi(pokemonId);
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other['official-artwork'].front_default
          })
        }
        setPokemons(pokemonsArray)
      })()
    }
  })

  return !auth ? <NotLogged/> : (
    <View>
      <PokemonList pokemons={pokemons} />
      <Pressable title='Limpiar favoritos' onPress={clearFavorites} style={styles.button}>
        <Text style={styles.text}>Limpiar favoritos</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 50,
    marginTop: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
  },
  text:{
    color: '#fff'
  }
})