import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

const Stack = createStackNavigator();

function App() {
    return (
      <BlogProvider>
      <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="IndexScreen" component={IndexScreen} />
      <Stack.Screen name="ShowScreen" component={ShowScreen} />
      <Stack.Screen name="CreateScreen" component={CreateScreen} 
      options={{
        headerRight: null,
      }}
      />
      </Stack.Navigator>
      </NavigationContainer>
      </BlogProvider>
    );
}

export default App;