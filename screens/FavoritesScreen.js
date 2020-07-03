import React from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favotiteMeals);

  if (favMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
