import React from 'react'
import { StyleSheet,ActivityIndicator, FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

export default function PokemonList({pokemons, loadPokemons, isNext}) {

  const loadMorePokemons = () => {
    loadPokemons()
  }

  return (
    <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon)=> String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item}/>}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMorePokemons}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        isNext && (<ActivityIndicator size='large' style={styles.spinner} color="#AEAEAE"/>)
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  spinner: {
    marginTop: 10,
    marginBottom: Platform.OS === "android" ? 40 : 30,
  }
})