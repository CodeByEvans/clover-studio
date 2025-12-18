"use client";

import { Cart, CartItem } from "@/types/cart.type";
import { Product } from "@/types/product.type";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cart: Cart;
  itemsInCart: number;
  addToCart: (cartItem: CartItem, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>([]);
  const itemsInCart = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const addToCart = (cartItem: CartItem, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItem.id);
      if (existing) {
        return prev.map((p) =>
          p.id === cartItem.id
            ? {
                ...p,
                quantity: (p.quantity || 0) + quantity,
              }
            : p
        );
      }
      return [...prev, { ...cartItem, quantity }];
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, itemsInCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
