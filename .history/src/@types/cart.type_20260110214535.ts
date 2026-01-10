import { Fragrance } from "./fragances.type";
import { Product } from "./product.type";

export type CartItem = {
  id: string;
  quantity: number;
  fragranceId?: string;
};

export type Cart = CartItem[];
