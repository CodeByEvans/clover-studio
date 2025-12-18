"use client";

import { useState } from "react";

import { Product } from "@/types/product.type";
import QuantitySelector from "./QuantitySelector";
import CartButton from "@/components/CartButton";

export default function AddToCartSection({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex gap-4 items-center">
      <QuantitySelector value={qty} onChange={setQty} />
      <CartButton product={product} quantity={qty} />
    </div>
  );
}
