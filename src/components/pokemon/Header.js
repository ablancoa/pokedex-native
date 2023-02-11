import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Header({name, order, image, color}) {


  const cardColor = [{backgroundColor: color, ...styles.bgStyle}]

  return (
    <>
      <View style={cardColor}/>
      <View style={styles.headerContainer}>
        <View style={styles.nameAndOrderContainer}>
          <Text style={styles.pokeName}>{capitalize(name)}</Text>
          <Text style={styles.pokeOrder}>#{`${order}`.padStart(3,0)}</Text>
        </View>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bgStyle:{
    width: '100%',
    minHeight: 300,
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform:[{scaleX: 2}],
  },
  headerContainer:{
    position: 'absolute',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 40
  },
  nameAndOrderContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  pokeName:{
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 10,
  },
  pokeOrder:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 10,
  },
  image: {
    width: 240,
    height: 240,
    resizeMode:'contain'
  }
})