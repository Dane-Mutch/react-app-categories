// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Category } from '../types/category'

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://developertests.z33.web.core.windows.net/' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category, string>({
      query: () => 'ReactTestData.json',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery } = categoriesApi