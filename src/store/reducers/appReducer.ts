import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryTitle } from '../../types/category';

interface AppState {
  selectedCategories: CategoryTitle[];
}

const initialState: AppState = {
  selectedCategories: [],
};

const arrayOfAll =
  <T>() =>
  <U extends T[]>(array: U & ([T] extends [U[number]] ? unknown : 'Invalid')) =>
    array;

const arrayOfAllTitles = arrayOfAll<CategoryTitle>();

const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    deselectAllCategories(state) {
      state.selectedCategories = [];
    },
    deselectCategory(state, action) {
      state.selectedCategories.splice(
        state.selectedCategories.findIndex(
          category => category === action.payload
        ),
        1
      );
    },
    selectCategory(state, action) {
      state.selectedCategories.push(action.payload);
    },
    selectAllCategories(state) {
      state.selectedCategories = arrayOfAllTitles([
        'Bakery',
        'Christmas',
        'Creamery',
        'Eggs',
        'Fruit Juice',
        'Milk',
        'Milkshakes',
        'Soft Drinks',
        'Spring Water',
        'Veg Boxes',
      ]);
    },
  },
});

export const {
  deselectAllCategories,
  deselectCategory,
  selectCategory,
  selectAllCategories,
} = appSlice.actions;
export default appSlice.reducer;
