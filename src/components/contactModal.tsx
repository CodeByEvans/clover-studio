import Link from "next/link";
import { MessageCircle, Phone, Instagram, Mail } from "lucide-react";

interface ContactModalProps {
  productName: string;
  productSlug: string;
  onClose: () => void;
}

export default function ContactModal({
  productName,
  productSlug,
  onClose,
}: ContactModalProps) {
  const productUrl = `${window.location.origin}/catalogo/${productSlug}`;
  const message = encodeURIComponent(
    `Hola, me interesa consultar disponibilidad sobre el producto: "${productName}" (${productUrl})`
  );

  return (
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar"
        >
          ×
        </button>
        <h3 className="text-xl font-semibold mb-4">Elige cómo contactarnos</h3>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href={`https://wa.me/34691453544?text=${message}`}
            target="_blank"
            className="flex flex-col items-center p-4 bg-[#BEE8CC] rounded-lg hover:bg-[#a6d6b1] transition"
          >
            <MessageCircle className="w-8 h-8 text-[#8B1E3F] mb-2" />
            WhatsApp
          </Link>
          <Link
            href="tel:+34691453544"
            className="flex flex-col items-center p-4 bg-[#F8C8DC] rounded-lg hover:bg-[#f5b8d1] transition"
          >
            <Phone className="w-8 h-8 text-[#8B1E3F] mb-2" />
            Teléfono
          </Link>
          <Link
            href={`https://instagram.com/clover_resinstudio`}
            target="_blank"
            className="flex flex-col items-center p-4 bg-[#D3B5E5] rounded-lg hover:bg-[#cbb2de] transition"
          >
            <Instagram className="w-8 h-8 text-[#8B1E3F] mb-2" />
            Instagram
          </Link>
          <Link
            href={`mailto:info@cloverstudio.com?subject=Consulta%20Producto&body=${message}`}
            className="flex flex-col items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            <Mail className="w-8 h-8 text-[#8B1E3F] mb-2" />
            Email
          </Link>
        </div>
      </div>
    </div>
  );
}
