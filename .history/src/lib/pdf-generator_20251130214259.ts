import { CartItem } from "@/types/cart.type";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "34912345678";

export async function generatePDF(items: CartItem[], total: number) {
  try {
    // Importar jsPDF de forma dinámica
    const jsPDFModule = await import("jspdf");
    const { jsPDF } = jsPDFModule;

    // Crear documento PDF
    const pdf = new jsPDF();

    // Estilos y contenido
    pdf.setFontSize(24);
    pdf.text("Clover Studio", 20, 20);

    pdf.setFontSize(12);
    pdf.text("Pedido de Compra", 20, 35);

    // Información del pedido
    pdf.setFontSize(10);
    const date = new Date().toLocaleDateString("es-ES");
    pdf.text(`Fecha: ${date}`, 20, 50);

    // Tabla de items
    let yPosition = 70;
    pdf.text("Productos:", 20, yPosition);
    yPosition += 10;

    pdf.setFontSize(9);
    items.forEach((item) => {
      const subtotal = item.price * item.quantity;
      const text = `${item.title} x${item.quantity} = €${subtotal.toFixed(2)}`;
      pdf.text(text, 20, yPosition);
      yPosition += 8;
    });

    // Total
    yPosition += 5;
    pdf.setFontSize(11);
    pdf.setFont("", "bold");
    pdf.text(`Total: €${total.toFixed(2)}`, 20, yPosition);

    // Generar blob del PDF
    const pdfBlob = pdf.output("blob");

    // Crear mensaje para WhatsApp
    const message = encodeURIComponent(
      `¡Hola! He realizado un pedido en Clover Studio. Total: €${total.toFixed(2)}`
    );

    // Descargar PDF primero
    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pedido-clover-${new Date().getTime()}.pdf`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    // Abrir WhatsApp después de un pequeño delay
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank");
    }, 500);
  } catch (error) {
    console.error("Error en generatePDF:", error);
    throw error;
  }
}
