"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

// Nuevo tipo simplificado para el carrito
type CartItem = {
  productId: string;
  fragranceId?: string;
  quantity: number;
};

type Cart = CartItem[];

// Tipo para items enriquecidos (cuando se combinan con productos y fragancias)
export type EnrichedCartItem = CartItem & {
  product?: Product;
  fragrance?: Fragrance | null;
  subtotal: number;
};

// Imports necesarios
import { Product } from "@/@types/product.type";
import { Fragrance } from "@/@types/fragances.type";

type CartContextType = {
  cart: Cart;
  addItem: (productId: string, quantity: number, fragranceId?: string) => void;
  removeItem: (productId: string, fragranceId?: string) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    fragranceId?: string
  ) => void;
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
    productId: string,
    quantity: number,
    fragranceId?: string
  ) => {
    const existingItem = cart.find(
      (item) => item.productId === productId && item.fragranceId === fragranceId
    );

    setCart((prev) => {
      if (existingItem) {
        return prev.map((item) =>
          item.productId === productId && item.fragranceId === fragranceId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId, fragranceId, quantity }];
    });

    toast.success("Producto añadido al carrito", {
      description: `Se ${existingItem ? "actualizaron" : "añadieron"} ${quantity} unidades al carrito.`,
      action: {
        label: "Deshacer",
        onClick: () => {
          setCart((prev) => {
            if (existingItem) {
              return prev
                .map((item) =>
                  item.productId === productId &&
                  item.fragranceId === fragranceId
                    ? { ...item, quantity: item.quantity - quantity }
                    : item
                )
                .filter((item) => item.quantity > 0);
            } else {
              return prev.filter(
                (item) =>
                  !(
                    item.productId === productId &&
                    item.fragranceId === fragranceId
                  )
              );
            }
          });
        },
      },
      classNames: {
        description: "text-muted-foreground",
      },
    });
  };

  const removeItem = (productId: string, fragranceId?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.productId === productId && item.fragranceId === fragranceId)
      )
    );
    toast.success("Producto eliminado del carrito");
  };

  const updateQuantity = (
    productId: string,
    quantity: number,
    fragranceId?: string
  ) => {
    if (quantity <= 0) {
      removeItem(productId, fragranceId);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.productId === productId && item.fragranceId === fragranceId
            ? { ...item, quantity }
            : item
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
