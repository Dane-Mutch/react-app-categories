import { useGetCategoriesQuery } from '../../services/categoriesApi';
import CategoriesSlider from '../CategoriesSlider';
import ProductGrid from '../ProductGrid';
import classes from './main.module.scss';

const Main = () => {
  const { data } = useGetCategoriesQuery();

  const categories = data?.map(category => category.title);

  return categories ? (
    <div className={classes.container}>
      <div className={classes.sliderContainer}>
        <CategoriesSlider categories={categories} />
        <ProductGrid></ProductGrid>
      </div>
    </div>
  ) : null;
};

export default Main;
