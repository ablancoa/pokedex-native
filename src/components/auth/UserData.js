import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from 'react-native';
import useAuth from '../../Hooks/useAuth';
import {getPokemonsFavorites} from '../../api/favorites'

export default function UserData() {

  const {auth, logout} = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(()=>{
      (async ()=>{
        try {
          const response = await getPokemonsFavorites()
          setTotal(response.length)
        } catch (error) {
          setTotal(0)
        }
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View styles={styles.titleBlok}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title='Nombre' text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title='Username' text={auth.username} />
        <ItemMenu title='Email' text={auth.email} />
        <ItemMenu title='Cantidad de favoritos' text={`${total} pokemons`} />
      </View>
      <Button style={styles.logoutBtn} title='Desconectarse' onPress={logout} />
    </View>
  )
}

function ItemMenu({title, text}) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20
  },
  titleBlok: {
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  dataContent: {
    marginHorizontal: 20
  },
  itemMenu:{
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf'
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120
  },
  logoutBtn: {
    paddingTop: 20
  }
})