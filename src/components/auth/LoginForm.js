import React, { useState } from 'react';
import { StyleSheet ,View, Text, TextInput, Pressable } from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {user, userDetails} from '../../utils/userDB'
import useAuth from '../../Hooks/useAuth'

export default function LoginForm() {
  const [error, setError] = useState('');

  const {login, logout} = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      setError('')
      const {username, password} = formValue;

      if(username !== user.username || password !== user.password){
        setError('Usuario o contraseña incorrecto');
      }else{
        login(userDetails)
      }

    }
  })
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput 
        placeholder='Nombre de usuario' 
        style={styles.nameInput} 
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput 
        secureTextEntry={true}
        placeholder='Contraseña' 
        style={styles.nameInput} 
        autoCapitalize='none'
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.text}>Entrar</Text>
      </Pressable>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

const initialValues = () => {
  return {
    username: '',
    password: ''
  }

}

const validationSchema = () => {
  return {
    username: Yup.string().required("El ususario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria")//.min(6)
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  nameInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 50,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
  },
  text:{
    color: '#fff'
  }
})