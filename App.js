import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import filmesStack from './screens/filmes/FilmesStack';
import SeriesStack from './screens/series/SeriesStack';
import AtoresStack from './screens/atores/AtoresStack';

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
        component={SeriesStack}
        options={{
      
          tabBarIcon: () => (
            <MaterialCommunityIcons name="lock-smart" size={26} />
          ),
        }}
      />
      <Tab.Screens
        name="Atores"
        component={AtoresStack}
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

