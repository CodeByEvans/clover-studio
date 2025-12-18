import { Product } from "./product.type";

export type CartItem = Product & {
  quantity: number;
};

export type Cart = CartItem[];
