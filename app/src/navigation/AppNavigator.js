import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen';
import SearchScreen from '../screens/SearchScreen';
import IMCScreen from '../screens/IMCScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="CharacterScreen"
          component={CharacterScreen}
        />

        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
        />

        <Stack.Screen
          name="IMCScreen"
          component={IMCScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}