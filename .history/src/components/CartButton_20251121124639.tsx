"use client";
import { useCart } from "@/context/cart-context";
import { Button } from "./ui/button";
import { CartItem } from "@/types/cart.type";

export const CartButton = ({ CartItem }: { CartItem: CartItem }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(CartItem, CartItem.quantity || 1);
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
