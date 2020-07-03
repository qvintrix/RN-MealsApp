import React, {useEffect, useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';

const MealDetailScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;
  const availableMeals = useSelector(state => state.meals.meals);
  const {title} = availableMeals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [navigation, toggleFavoriteHandler]);

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
