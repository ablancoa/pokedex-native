import React from 'react'
import { StyleSheet ,View, Text } from 'react-native';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type({types}) {

  return (
    <View style={styles.content}>
      {types.map((type, index) => (
        <View key={index} 
        style={{backgroundColor: getColorByPokemonType(type.type.name), ...styles.typeContainer}}>
          <Text style={{color: '#fff'}}>{type.type.name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  typeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 15
  }
})