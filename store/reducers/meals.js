import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE} from '../actions/meals';
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favotiteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favotiteMeals.findIndex(
        meal => meal.id === action.mealId,
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favotiteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favotiteMeals: updatedFavMeals};
      }
      const meal = state.meals.find(meal => meal.id === action.mealId);
      return {...state, favotiteMeals: [...state.favotiteMeals, meal]};

    default:
      return state;
  }
};

export default mealsReducer;
