interface ProductData { 
  amount: string,
  key: number, 
  stock: number, 
  title: string, 
  price: number,
}

interface Category { 
  title: string, 
  data: ProductData
}

export type Categories = Category[]