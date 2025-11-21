"use client";

import { Products } from "@/types/product.type";
import { createContext, useContext } from "react";

type CartContextType = {
  cart: Products;
  itemsInCart: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const cart: Products = []; // Aquí iría la lógica para obtener los productos en el carrito
  const itemsInCart = cart.length; // Lógica para contar los ítems en el carrito

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
