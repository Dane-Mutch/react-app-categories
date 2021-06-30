import Categories from '../Categories';
import ProductGrid from '../ProductGrid';
import classes from './main.module.scss';

const Main = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sliderContainer}>
        <Categories />
      </div>
      <ProductGrid />
    </div>
  );
};

export default Main;
