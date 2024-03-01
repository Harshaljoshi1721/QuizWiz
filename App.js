import React, { useEffect } from 'react';
import { Image, Text, StyleSheet, StatusBar} from 'react-native'; // Import Image and Text components
import WelcomeScreen from './src/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import { initDatabase } from './db/mydb';
import SettingScreen from './src/screens/SettingScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import CategoryScreen from './src/screens/CategoryScreen';

export const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    initDatabase();
  }, [])

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true}/>
      <Stack.Navigator initialRouteName='QuizWiz'>
        <Stack.Screen
          name='QuizWiz'
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Login' 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Sign Up'
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Home'  
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name='Settings' 
        component={SettingScreen}
        />
        <Stack.Screen
        name='Notification'
        component={NotificationScreen}
        />
        <Stack.Screen
        name='Category'
        component={CategoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
