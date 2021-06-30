import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { categoriesApi } from '../services/categoriesApi';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
