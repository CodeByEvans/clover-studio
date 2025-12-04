import { Cart } from "@/types/cart.type";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "34691453544";

export function sendOrderViaWhatsApp(items: Cart, total: number) {
  // Crear el mensaje
  const productsList = items
    .map(
      (item) =>
        `${item.title} x${item.quantity} = €${(item.price * item.quantity).toFixed(2)}`
    )
    .join("\n");

  const message = encodeURIComponent(
    `¡Hola! He realizado un pedido en Clover Studio:\n\n${productsList}\n\nTotal: €${total.toFixed(2)}`
  );

  // Abrir WhatsApp con el mensaje
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
}
