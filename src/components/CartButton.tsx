"use client";
import { useCart } from "@/context/cart-context";
import { Button } from "./ui/button";
import { Product } from "@/types/product.type";
import { Fragrance } from "@/types/fragances.type";

export const CartButton = ({
  product,
  quantity,
  fragrance,
}: {
  product: Product;
  quantity?: number;
  fragrance?: Fragrance;
}) => {
  const { addItem } = useCart();

  return (
    <Button
      className="mt-0"
      onClick={() => addItem(product, quantity || 1, fragrance)}
    >
      Añadir al carrito
    </Button>
  );
};

export default CartButton;
