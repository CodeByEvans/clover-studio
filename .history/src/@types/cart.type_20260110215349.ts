export type CartItem = {
  id: string;
  quantity: number;
  fragranceId?: string;
};

export type Cart = CartItem[];
