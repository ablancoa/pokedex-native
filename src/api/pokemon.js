import {API_URL} from '../utils/constants';

export async function getPokemonsApi(nextUrl){
  try {
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await fetch(nextUrl || url);
    const data = await response.json();
    return data; 
  } catch (error) {
    throw error
  }
}

export async function getPokemonDetails(url){
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    throw error
  }
}

export async function getPokemonDataApi(id){
  try {
    const url = `${API_URL}/pokemon/${id}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    throw error
  }
}