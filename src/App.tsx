import { useGetCategoriesQuery } from "./services/categoriesApi";

const App = () => { 
  const { data, isLoading, error } = useGetCategoriesQuery();
  return null;
};

export default App;