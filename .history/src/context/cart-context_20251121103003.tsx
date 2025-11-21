"use client";

import { Cart, CartItem, Product, Products } from "@/types/product.type";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cart: Cart;
  itemsInCart: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>([]);
  const itemsInCart = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: (p.quantity || 1) + quantity }
            : p
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, itemsInCart }}>
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
