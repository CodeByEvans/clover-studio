interface Category {
  id: number;
  name: string;
}

export type Products = Product[];

export type Product = {
  id: number;
  title: string;
  description: string;
  images: string[];
  portrait: string;
  price: number;
  category: Category;
  created_at: string;
  updated_at: string;
};
