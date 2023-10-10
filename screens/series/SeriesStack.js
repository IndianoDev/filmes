import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeriesPopulares from './SeriesPopulares';

const Stack = createNativeStackNavigator();

const SeriesStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="series populares" component={SeriesPopulares} options={{ title: 'Series Populares' }} />
            </Stack.Navigator>
        </>
    )
}

export default SeriesStack