export type CategoryTitle =
  | 'Milk'
  | 'Milkshakes'
  | 'Fruit Juice'
  | 'Eggs'
  | 'Creamery'
  | 'Christmas'
  | 'Bakery'
  | 'Spring Water'
  | 'Soft Drinks'
  | 'Veg Boxes';

export type ProductData = {
  amount: string;
  key: number;
  stock: number;
  title: string;
  price: number;
};

export interface Category {
  title: CategoryTitle;
  data: ProductData[];
}

export type Categories = Category[];
