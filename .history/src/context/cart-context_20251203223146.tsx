"use client";

import { Cart, CartItem } from "@/types/cart.type";
import { Fragrance } from "@/types/fragances.type";
import { Product } from "@/types/product.type";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

type CartContextType = {
  cart: Cart;
  total: number;
  addItem: (product: Product, quantity: number, fragrance: Fragrance) => void;
  removeItem: (product: Product) => void;
  updateQuantity: (product: Product, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<Cart>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addItem = (
    product: Product,
    quantity: number,
    fragrance: Fragrance
  ) => {
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
        fragrance,
      };

      return [...prev, newItem];
    });
    toast.success("Producto añadido al carrito", {
      description: `Se han añadido ${quantity} ${product.title} al carrito`,
      action: {
        label: "Deshacer",
        onClick: () => {
          removeItem(product);
        },
      },
      classNames: {
        description: "text-muted-foreground",
      },
    });
  };
  const removeItem = (product: Product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  const updateQuantity = (product: Product, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        isOpen,
      }}
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
