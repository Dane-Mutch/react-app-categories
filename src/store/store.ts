import { configureStore } from '@reduxjs/toolkit'
import { categoriesApi } from '../services/categoriesApi';

const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
})

export default store;