import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>

    <PaperProvider> 
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='filmes-populares' component={FilmesPopulares} />
        </stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
      
    </>
  );
}

