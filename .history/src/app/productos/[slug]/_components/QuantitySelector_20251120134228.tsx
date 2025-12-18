"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex items-center border rounded-full px-4 py-2 select-none">
      <button
        onClick={decrease}
        className="p-2 hover:text-[#39a459] transition-colors"
      >
        <Minus className="w-4 h-4" />
      </button>

      <span className="w-10 text-center font-semibold">{qty}</span>

      <button
        onClick={increase}
        className="p-2 hover:text-[#39a459] transition-colors"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
