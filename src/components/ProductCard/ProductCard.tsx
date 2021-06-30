import { FC } from 'react';
import { ProductData } from '../../types/category';
import classes from './productCard.module.scss';

type Props = {
  data: ProductData;
};

type GetStockText = (stockCount: ProductData['stock']) => string;

const getStockText: GetStockText = stockCount => {
  if (stockCount === 0) {
    return 'Out of stock.';
  }
  if (stockCount <= 10) {
    return `Hurry! Only ${stockCount} left.`;
  }
  return 'In Stock.';
};

const ProductCard: FC<Props> = ({ data }) => {
  return (
    <div className={classes.container}>
      <img src='https://picsum.photos/400' alt={data.title}></img>
      <div className={classes.productDetailsContainer}>
        <span className={classes.text}>{data.title}</span>
        <span className={classes.text}>Price: £{data.price}</span>
        <span className={classes.text}>{getStockText(data.stock)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
