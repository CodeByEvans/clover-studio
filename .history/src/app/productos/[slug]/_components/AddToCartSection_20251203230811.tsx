"use client";

import { useState } from "react";

import { Product } from "@/types/product.type";
import QuantitySelector from "./QuantitySelector";
import CartButton from "@/components/CartButton";
import { Fragrance } from "@/types/fragances.type";

export default function AddToCartSection({
  product,
  fragrance,
}: {
  product: Product;
  fragrance?: Fragrance;
}) {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex gap-4 items-center">
      <QuantitySelector value={qty} onChange={setQty} />
      <CartButton product={product} quantity={qty} fragrance={fragrance} />
    </div>
  );
}
