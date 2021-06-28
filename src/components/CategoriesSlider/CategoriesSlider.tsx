import { FC } from 'react';
import Slider from 'react-slick';

import type { Category } from '../../types/category';
import CategoryCard from '../CategoryCard';

type Props = {
  categories: Category['title'][];
};

const slickResponsiveOptions = [
  {
    breakpoint: 1500,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 1250,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const CategoriesSlider: FC<Props> = ({ categories }) => {
  return (
    <Slider
      slidesToShow={5}
      slidesToScroll={2}
      responsive={slickResponsiveOptions}
      infinite
    >
      {categories.map(category => (
        <CategoryCard category={category} key={category} />
      ))}
    </Slider>
  );
};

export default CategoriesSlider;
