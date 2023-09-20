import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>

    <PaperProvider> 
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='Filmes-Populares' component={FilmesPopulares} options={{title:'filmes Populares'}} />
          <stack.Screen name='Filmes-Detalhes' component={FilmesDetalhes} options={{title:'filmes detalhes'}}/>
          
        </stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
      
    </>
  );
}

