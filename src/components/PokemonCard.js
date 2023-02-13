import React from 'react'
import { StyleSheet,View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokemonCard({pokemon}) {
  const navigation = useNavigation()
  const goToPokemon = () => {
    navigation.navigate("Pokemon", {id: pokemon.id})
  }

  const pokemonColor = getColorByPokemonType(pokemon.type)
  const bgStyle = {backgroundColor: pokemonColor,...styles.card}

  return (
    <View style={{width:"50%", padding:5}}>
        <TouchableOpacity style={bgStyle} onPress={() => goToPokemon()}>
        <View style={styles.bgStyele}>
          <Text style={styles.number}>#{`${pokemon.id}`.padStart(3,0)}</Text>
          <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
        </View>
        <Image source={{uri: pokemon.image}} style={styles.image}/>
      </TouchableOpacity  >
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 130,
    marginTop: 3,
    padding: 3,
    alignItems: 'flex-end',
    borderRadius: 15,
  },
  bgStyele: {
    width: '100%',
    flex: 1,
    height: '100%'
    
  },
  number:{
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,

  },
  name:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 5
    
  },
  image: {
    width: 90,
    height: 90,
    position: 'absolute',
    bottom: 2,
    right: 2,
  }
})