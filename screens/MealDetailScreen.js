import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = ({route}) => {
  const mealId = route.params.mealId;
  const {title} = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
