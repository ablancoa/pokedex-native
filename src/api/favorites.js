import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITES_STORAGE } from '../utils/constants';
import { pull } from 'lodash';

export async function addPokemonToFavorite(id){
  try {
    const favorites = await getPokemonsFavorites();
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITES_STORAGE, JSON.stringify(favorites))
  } catch (error) {
    throw error
  }
}

export async function getPokemonsFavorites(){
  try {
    const response = await AsyncStorage.getItem(FAVORITES_STORAGE);
    return response != null ? JSON.parse(response) : []
  } catch (error) {
    throw error
  }
}

export async function removePokemonFavorite(id){
  try {
    const favorites = await getPokemonsFavorites();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newFavorites))
  } catch (error) {
    throw error
  }
}

export async function isPokemonInFavorite(id){
  try {
    const response = await getPokemonsFavorites();
    return response.includes(id)
  } catch (error) {
    throw error
  }
}

export async function clearFavorites(){
  try {
    await AsyncStorage.setItem(FAVORITES_STORAGE, JSON.stringify([]))
  } catch (error) {
    throw error
  }
}