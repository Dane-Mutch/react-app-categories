import { FC } from 'react';
import Slider, { ResponsiveObject } from 'react-slick';

import type { Category } from '../../types/category';
import CategoryCard from '../CategoryCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  categories: Category['title'][];
};

const slickResponsiveOptions: ResponsiveObject[] = [
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
    breakpoint: 650,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    },
  },
];

const CategoriesSlider: FC<Props> = ({ categories }) => {
  return (
    <>
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
    </>
  );
};

export default CategoriesSlider;
