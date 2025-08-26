import { CategoryType } from "./Category.type";

export interface ProductImage {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Product {
  id: number;
  type: string;
  images: ProductImage[];
  name: string;
  slug: string;
  description: string;
  category: CategoryType;
  rating: number;
  reviews: number;
  price: number;
  features: string[];
  originalPrice?: number;
  badge?: string;
}
