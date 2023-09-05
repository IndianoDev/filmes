import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const stack = createNativeStackNavigator();

const FilmesPopulares = () => {
  return (
   <>
    <Text>filmes populares</Text>
   </>
  )
}

export default FilmesPopulares

