import { Cart } from "@/types/cart.type";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "34691453544";

export function sendOrderViaWhatsApp(items: Cart, total: number) {
  const productsList = items
    .map((item) => {
      const fragranceText = item.fragrance
        ? `\n  · Aroma: ${item.fragrance.name} (${item.fragrance.intensity})`
        : "";

      return `${item.title} x${item.quantity} = €${(
        item.price * item.quantity
      ).toFixed(2)}${fragranceText}`;
    })
    .join("\n\n");

  const message = encodeURIComponent(
    `¡Hola! He realizado un pedido en Clover Studio:\n\n${productsList}\n\nTotal: €${total.toFixed(
      2
    )}`
  );

  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
}
