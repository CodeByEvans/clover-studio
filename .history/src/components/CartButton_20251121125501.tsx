"use client";
import { useCart } from "@/context/cart-context";
import { Button } from "./ui/button";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";
import { CartItem } from "@/types/cart.type";

export const CartButton = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  const [CartItem, setCartItem] = useState<CartItem | null>(null);

  useEffect(() => {
    if (quantity) {
      const newCartItem: CartItem = {
        ...product,
        quantity: quantity,
      };
      setCartItem(newCartItem);
    }
  }, [product, quantity]);
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    if (CartItem) {
      addToCart(CartItem, quantity);
    } else {
      console.error("CartItem is null");
    }
  };
  return (
    <>
      <Button className="mt-0" onClick={handleAddToCart}>
        Añadir al carrito
      </Button>
    </>
  );
};

export default CartButton;
