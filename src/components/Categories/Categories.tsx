import Button from 'react-bootstrap/Button';

import CategoriesSlider from '../CategoriesSlider';
import { useAppDispatch } from '../../helpers/customHooks';
import {
  deselectAllCategories,
  selectAllCategories,
} from '../../store/reducers/appReducer';
import { useGetCategoriesQuery } from '../../services/categoriesApi';

import classes from './categories.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetCategoriesQuery();

  const categories = data?.map(category => category.title);

  const handleSelectAllClick = () => dispatch(selectAllCategories());

  const handleDeselectAll = () => dispatch(deselectAllCategories());

  return categories ? (
    <>
      <Button
        className={classes.button}
        variant='outline-primary'
        onClick={handleSelectAllClick}
      >
        Select all
      </Button>
      <Button
        className={classes.button}
        variant='outline-primary'
        onClick={handleDeselectAll}
      >
        Deselect all
      </Button>
      <CategoriesSlider categories={categories} />
    </>
  ) : null;
};

export default Categories;
