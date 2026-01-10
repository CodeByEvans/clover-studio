import { Fragrance } from "@/@types/fragances.type";
import { Product } from "@/@types/product.type";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "34691453544";

interface EnhancedCartItem {
  productId: string;
  fragranceId?: string;
  quantity: number;
  product?: Product;
  fragrance?: Fragrance | null;
  subtotal: number;
}

export function sendOrderViaWhatsApp(items: EnhancedCartItem[], total: number) {
  const productsList = items
    .map((item) => {
      if (!item.product) return null;

      const fragranceText = item.fragrance
        ? `\n  · Aroma: ${item.fragrance.name} (${item.fragrance.intensity})`
        : "";

      return `${item.product.title} x${item.quantity} = €${(
        item.product.price * item.quantity
      ).toFixed(2)}${fragranceText}`;
    })
    .filter(Boolean) // Elimina items null
    .join("\n\n");

  const message = encodeURIComponent(
    `¡Hola! He realizado un pedido en Clover Studio:\n\n${productsList}\n\nTotal: €${total.toFixed(2)}`
  );

  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
}
