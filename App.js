import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';
import Atores from './screens/filmes/Atores';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import filmesStack from './screens/filmes/filmesStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>

    <PaperProvider> 
      <NavigationContainer>
      <Tab.Navigator>

      <Tab.Screen
        name="Filmes"
        component={filmesStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie-open" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Atores}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="lock-smart" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Atores"
        component={FilmesDetalhes}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="configurações"
        component={FilmesDetalhes}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cog" size={26} />
          ),
        }}
      />
        
    </Tab.Navigator>
      </NavigationContainer>
      </PaperProvider>
      
    </>
  );
}

