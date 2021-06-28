import { FC } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../helpers/customHooks';

import Bread from './assets/bread.jpg';
import Creamery from './assets/butter.jpg';
import Christmas from './assets/christmas.jpg';
import Eggs from './assets/eggs.jpg';
import FruitJuice from './assets/fruit-juice.jpg';
import Milk from './assets/milk.jpg';
import MilkShake from './assets/milkshake.jpg';
import SoftDrinks from './assets/soft-drinks.jpg';
import VegBox from './assets/veg-box.jpg';
import Water from './assets/water.jpg';

import { Category, CategoryTitle } from '../../types/category';
import classes from './categoryCard.module.scss';
import {
  selectCategory,
  deselectCategory,
} from '../../store/reducers/appReducer';

type Props = {
  category: Category['title'];
};

type ImageMap = {
  [K in CategoryTitle]: any;
};

const imageMap: ImageMap = {
  'Fruit Juice': FruitJuice,
  Bakery: Bread,
  'Spring Water': Water,
  Christmas: Christmas,
  Creamery: Creamery,
  'Soft Drinks': SoftDrinks,
  Milk: Milk,
  Milkshakes: MilkShake,
  Eggs: Eggs,
  'Veg Boxes': VegBox,
};

const CategoryCard: FC<Props> = ({ category }) => {
  const categories = useAppSelector(state => state.app.selectedCategories);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    isSelectedCategoryPredicate(category)
      ? dispatch(deselectCategory(category))
      : dispatch(selectCategory(category));
  };
  const isSelectedCategoryPredicate: (category: Category['title']) => boolean =
    category => categories.includes(category);
  return (
    <div
      className={cn(classes.container, {
        [classes.selected]: isSelectedCategoryPredicate(category),
      })}
      onClick={handleClick}
    >
      <img
        src={imageMap[category]}
        alt={category}
        height='200'
        width='200'
      ></img>
      <p>{category}</p>
    </div>
  );
};

export default CategoryCard;
