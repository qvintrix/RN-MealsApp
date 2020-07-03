import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
};

export default App;
