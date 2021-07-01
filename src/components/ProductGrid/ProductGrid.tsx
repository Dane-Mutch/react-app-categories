import { useAppSelector } from '../../helpers/customHooks';
import { useGetCategoriesQuery } from '../../services/categoriesApi';
import ProductCard from '../ProductCard';
import classes from './productGrid.module.scss';

const ProductGrid = () => {
  const selectedCategories = useAppSelector(
    state => state.app.selectedCategories
  );
  const { data } = useGetCategoriesQuery();
  const productsToView = data
    ?.filter(category => selectedCategories.includes(category.title))
    .map(category => category.data)
    .flat();

  return (
    <section className={classes.container}>
      {productsToView?.map(product => (
        <ProductCard data={product} key={product.key} />
      ))}
    </section>
  );
};

export default ProductGrid;
