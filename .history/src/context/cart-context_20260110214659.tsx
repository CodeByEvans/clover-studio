"use client";

import { Cart, CartItem } from "@/@types/cart.type";
import { Fragrance } from "@/@types/fragances.type";
import { Product } from "@/@types/product.type";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

type CartContextType = {
  cart: Cart;
  addItem: (product: Product, quantity: number, fragrance?: Fragrance) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
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

  const addItem = (
    product: Product,
    quantity: number,
    fragrance?: Fragrance
  ) => {
    const itemId = product.id + (fragrance?.id ?? "no-fragrance");
    const existingItem = cart.find((item) => item.id === product.id);
    const newItem: CartItem = {
      id: product.id,
      quantity,
      fragranceId: fragrance?.id,
    };

    setCart((prev) => {
      if (existingItem) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, newItem];
      }
    });
    toast.success("Producto añadido al carrito", {
      description: `Se ${existingItem ? "actualizaron" : "añadieron"} ${quantity} ${product.title} al carrito.`,
      action: {
        label: "Deshacer",
        onClick: () => {
          setCart((prev) => {
            if (existingItem) {
              return prev
                .map((item) =>
                  item.id === itemId
                    ? { ...item, quantity: item.quantity - quantity }
                    : item
                )
                .filter((item) => item.quantity > 0);
            } else {
              return prev.filter((item) => item.id !== itemId);
            }
          });
        },
      },
      classNames: {
        description: "text-muted-foreground",
      },
    });
  };
  const removeItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => setCart([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
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
