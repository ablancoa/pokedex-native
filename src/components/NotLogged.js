import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NotLogged() {
  const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para poder ver favoritos debes iniciar sesión</Text>
      <Button title='Ir al LogIn' onPress={() => navigation.navigate("Account")} />
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    marginVertical: 50,
    paddingHorizontal: 30
  },
  text: {
    textAlign: 'center',
    marginBottom: 10
  }
})