import React, {useState, useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { addPokemonToFavorite, isPokemonInFavorite, removePokemonFavorite } from '../../api/favorites';

export default function Favorites({id}) {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadFav, setReloadFav] = useState(false);

  const Icon = isFavorite ? FontAwesome: FontAwesome5

  useEffect(() => {
    (async ()=> {
      console.log('ejecuto efecto')
      try {
        const response = await isPokemonInFavorite(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })()
  },[reloadFav])
  
  const addToFavorite = async () => {
    try {
      await addPokemonToFavorite(id);
      reloadFavorite()
    } catch (error) {
      throw error
    }
  }

  const removeFromFavorites = async () => {
    try {
      await removePokemonFavorite(id);
      reloadFavorite()
    } catch (error) {
      throw error
    }
  }

  const reloadFavorite = () => {
    setReloadFav((prev) => !prev);
  }

  return (
    <Icon
      name='heart'
      color='#fff'
      size={20}
      onPress={isFavorite ? removeFromFavorites: addToFavorite}
      style={{marginRight: 20}}
    />
  )
}