/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './src/screens/List'
import Photo from './src/screens/Photo'
import { store } from './src/store/Store'



const Stack = createStackNavigator();



const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UnsplashGallery">
          <Stack.Screen name="UnsplashGallery" component={List} />
          <Stack.Screen name="Photo" component={Photo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};

export default App;
