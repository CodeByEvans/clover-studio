import Link from "next/link";
import { MessageCircle, Phone, Instagram, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-[#F9F7F3] to-[#EFE6DD]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Listo para Transformar tu Espacio?
          </h2>

          <p className="text-xl text-[#999999] mb-12 max-w-2xl mx-auto">
            Contáctanos para consultas personalizadas, pedidos especiales o
            cualquier pregunta sobre nuestros productos
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link
              href="https://wa.me/34691453544"
              target="_blank"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#BEE8CC] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-[#999999] text-sm">Respuesta inmediata</p>
            </Link>

            <Link
              href="tel:+34691453544"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#F8C8DC] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-[#999999] text-sm">Llamada directa</p>
            </Link>

            <Link
              href="https://instagram.com/clover_resinstudio"
              target="_blank"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#D3B5E5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-[#999999] text-sm">Síguenos</p>
            </Link>

            <Link
              href="mailto:ceci@cloverstudio.es"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#FDE68A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-[#999999] text-sm">Consultas formales</p>
            </Link>
          </div>

          {/* Main CTA */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-[#999999] mb-6">
              Creamos productos únicos según tus necesidades. Cuéntanos tu idea
              y la haremos realidad.
            </p>
            <Link
              href="https://wa.me/34691453544?text=Hola! Me interesa un producto personalizado"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#8B1E3F] hover:bg-[#7a1a37] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Cotización Personalizada
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
