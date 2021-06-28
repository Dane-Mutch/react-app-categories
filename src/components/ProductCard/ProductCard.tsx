import { FC } from 'react';
import { ProductData } from '../../types/category';
import classes from './productCard.module.scss';

type Props = {
  data: ProductData;
};

const ProductCard: FC<Props> = ({ data }) => {
  const isLowStock = data.stock < 3;
  return (
    <div className={classes.container}>
      <img src='https://picsum.photos/400'></img>
      <div className={classes.productDetailsContainer}>
        <span className={classes.text}>{data.title}</span>
        <span className={classes.text}>Price : £{data.price}</span>
        <span className={classes.text}>
          {isLowStock ? `Hurry! Only ${data.stock} left` : 'In Stock'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
