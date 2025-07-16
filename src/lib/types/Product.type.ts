export interface ProductImage {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface ProductType {
  id: number;
  type: string;
  images: ProductImage[];
  name: string;
  slug: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  features: string[];
  originalPrice?: number;
  badge?: string;
}
