interface ProductData { 
  amount: string,
  key: number, 
  stock: number, 
  title: string, 
  price: number,
}

export interface Category { 
  title: string, 
  data: ProductData
}