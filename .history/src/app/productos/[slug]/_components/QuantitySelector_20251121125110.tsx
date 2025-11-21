import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (q: number) => void;
}) {
  const increase = () => onChange(value + 1);
  const decrease = () => onChange(value > 1 ? value - 1 : 1);

  return (
    <div className="flex items-center border rounded-full px-4 py-2">
      <button onClick={decrease}>
        <Minus className="w-4 h-4" />
      </button>

      <span className="w-10 text-center">{value}</span>

      <button onClick={increase}>
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
