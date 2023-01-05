import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'white'
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <BlogProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="IndexScreen">
          <Stack.Screen name="IndexScreen" component={IndexScreen} options={{ title: 'Blogs', cardStyle: { backgroundColor: 'transparent' } }} />
          <Stack.Screen name="ShowScreen" component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
    );
  }

  export default App;