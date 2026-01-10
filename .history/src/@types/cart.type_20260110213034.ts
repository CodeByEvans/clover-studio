import { Fragrance } from "./fragances.type";
import { Product } from "./product.type";

export type CartItem = {
  id: string;
  quantity: number;
  fragrance?: Fragrance;
};

export type Cart = CartItem[];
