import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
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
      <Stack.Screen name="IndexScreen" component={IndexScreen} options = {{title:'Blogs'}} />
      <Stack.Screen name="ShowScreen" component={ShowScreen} />
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      </BlogProvider>
    );
}

export default App;