export interface ProductSize {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  section: string;
  description?: string;
  price?: number;
  sizes?: ProductSize[];
  image: string;
}