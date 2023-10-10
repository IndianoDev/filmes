import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FilmesPopulares from './FilmesPopulares';
import FilmesDetalhes from './FilmesDetalhes';
import Atores from './Atores';

const stack = createNativeStackNavigator();

const filmesStack = () => {
  return (
   <>
   <stack.Navigator>
    <stack.Screen name='Filmes-Populares' component={FilmesPopulares} options={{title:'filmes Populares'}} />
    <stack.Screen name='Filmes-Detalhes' component={FilmesDetalhes} options={{title:'filmes detalhes'}}/>
    <stack.Screen name='Atores' component={Atores} options={{title:'Detalhes'}}/>
    
  </stack.Navigator>
   </>
  )
}

export default filmesStack