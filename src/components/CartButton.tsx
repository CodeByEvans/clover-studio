"use client";
import { useCart } from "@/context/cart-context";
import { Button } from "./ui/button";
import { Product } from "@/types/product.type";

export const CartButton = ({
  product,
  quantity,
}: {
  product: Product;
  quantity?: number;
}) => {
  const { addToCart } = useCart();

  return (
    <Button className="mt-0" onClick={() => addToCart(product, quantity || 1)}>
      Añadir al carrito
    </Button>
  );
};

export default CartButton;
