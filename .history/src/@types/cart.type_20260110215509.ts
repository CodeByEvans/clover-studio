export type CartItem = {
  id: string;
  quantity: number;
  fragranceId?: string;
  productId: string;
};

export type Cart = CartItem[];
