"use client";

import { Cart, CartItem } from "@/types/cart.type";
import { Product } from "@/types/product.type";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cart: Cart;
  itemsInCart: number;
  addToCart: (cartItem: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>([]);
  const itemsInCart = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        console.log("Updating quantity");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const newItem: CartItem = {
        ...product,
        quantity,
      };

      console.log("Adding to cart:", newItem);

      return [...prev, newItem];
    });
  };
  const removeFromCart = (product: Product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, itemsInCart, addToCart, removeFromCart, clearCart }}
    >
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
