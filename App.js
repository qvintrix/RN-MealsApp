import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
import MealsReducer from './store/reducers/meals';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
enableScreens();

const rootReducer = combineReducers({meals: MealsReducer});
const store = createStore(rootReducer);
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
