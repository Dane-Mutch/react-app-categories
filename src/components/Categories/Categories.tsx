import Button from 'react-bootstrap/Button';

import CategoriesSlider from '../CategoriesSlider';
import { useAppDispatch } from '../../helpers/customHooks';
import {
  deselectAllCategories,
  selectAllCategories,
} from '../../store/reducers/appReducer';
import { useGetCategoriesQuery } from '../../services/categoriesApi';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetCategoriesQuery();

  const categories = data?.map(category => category.title);

  const handleSelectAllClick = () => dispatch(selectAllCategories());

  const handleDeselectAll = () => dispatch(deselectAllCategories());

  return categories ? (
    <>
      <Button variant='outline-primary' onClick={handleSelectAllClick}>
        Select all
      </Button>
      <Button variant='outline-primary' onClick={handleDeselectAll}>
        Deselect all
      </Button>
      <CategoriesSlider categories={categories} />
    </>
  ) : null;
};

export default Categories;
