import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { capitalize } from 'lodash';

export default function Stats({stats, color}) {

  const statBar = (stat, index) => {
    return(
      <View style={styles.content} key={index}>
        <Text style={styles.name}>{capitalize(stat.stat.name)}</Text>
        <Text style={styles.baseStat}>{stat.base_stat}</Text>
        <View style={styles.barContent}>
          <View style={{...styles.barStat, width: `${stat.base_stat}%`, backgroundColor: color}}></View>
        </View>
      </View>
    )
  }

  return (
    <View style={{paddingBottom: 40}}>
      <Text style={styles.baseStats}>Base Stats</Text>
      {stats.map((stat, index) => (
        statBar(stat, index)
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  baseStats:{
    fontSize: 27,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name:{
    width: '30%'
  },
  baseStat: {
    width: '10%',
    textAlign: 'right',
    paddingRight: 5
  },
  barContent: {
    width: '60%',
    backgroundColor: '#dedede',
    height: 10,
    borderRadius: 8,
    overflow: 'hidden'
  },
  barStat: {
    height: '100%',
    borderRadius: 8
  }
})