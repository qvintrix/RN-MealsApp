import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  headerBackTitle: 'Back',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={navData => {
          return {
            title: 'Meal Categories',
            headerLeft: () => (
              <Icon.Button
                name="menu"
                size={25}
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({route}) => {
          const catId = route.params.categoryId;
          const {title} = CATEGORIES.find(cat => cat.id === catId);
          return {
            title,
          };
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => {
          const mealId = route.params.mealId;
          const {title} = MEALS.find(meal => meal.id === mealId);
          return {
            title,
            headerRight: () => (
              <Icon.Button
                name="star"
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  console.log('favorite');
                }}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

function FavoritesStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={navData => {
          return {
            title: 'Your Favorites',
            headerLeft: () => (
              <Icon.Button
                name="menu"
                size={25}
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => {
          const mealId = route.params.mealId;
          const {title} = MEALS.find(meal => meal.id === mealId);
          return {
            title,
            headerRight: () => (
              <Icon.Button
                name="star"
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  console.log('favorite');
                }}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

function FiltersNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Filters"
      screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={navData => {
          return {
            title: 'Filters Meals',
            headerLeft: () => (
              <Icon.Button
                name="menu"
                size={25}
                backgroundColor="transparent"
                color={Colors.primaryColor}
                underlayColor="transparent"
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
function MainNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
      }}>
      <Drawer.Screen
        name="MealsFavs"
        component={MealsFavTabNavigator}
        options={{title: 'Meals'}}
      />
      <Drawer.Screen name="Filters" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
}

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
        inactiveTintColor: 'gray',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size, tintColor}) => {
          let iconName = 'restaurant';
          if (route.name === 'Favorites') {
            iconName = 'star';
          }
          return <Icon name={iconName} color={tintColor} size={25} />;
        },
      })}>
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesStackNavigator} />
    </Tab.Navigator>
  );
}

export default MainNavigator;
