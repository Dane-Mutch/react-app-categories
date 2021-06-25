import { useGetCategoriesQuery } from "./services/categoriesApi";
import Layout from './components/Layout'

const App = () => { 
  const { data, isLoading, error } = useGetCategoriesQuery();
  return <Layout />
};

export default App;