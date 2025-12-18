// CallToAction.tsx - Redesigned
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Instagram,
  Mail,
  Sparkles,
  Star,
  Heart,
  Zap,
} from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-[#8B1E3F] via-[#7a1a37] to-[#6b1830] relative overflow-hidden"
    >
      {/* Enhanced floating elements */}
      <div className="absolute top-16 left-12 opacity-15 animate-float">
        <Sparkles className="w-14 h-14 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute bottom-20 right-16 opacity-15 animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <Heart className="w-10 h-10 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute top-1/3 right-1/4 opacity-10 animate-soft-pulse"
        style={{ animationDelay: "0.8s" }}
      >
        <Star className="w-8 h-8 text-[#D3B5E5]" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-10 animate-soft-pulse">
        <Zap className="w-6 h-6 text-[#BEE8CC]" />
      </div>
      <div
        className="absolute top-1/4 left-1/3 opacity-8 animate-soft-pulse"
        style={{ animationDelay: "1.8s" }}
      >
        <Sparkles className="w-4 h-4 text-[#FDE68A]" />
      </div>

      {/* Enhanced gradient orbs for depth */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#F8C8DC] opacity-8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#D3B5E5] opacity-6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#BEE8CC] opacity-4 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced title with decorative elements */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[#F8C8DC] to-transparent w-20"></div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F8C8DC] to-[#f5b8d1] rounded-full shadow-2xl">
                <Heart className="w-8 h-8 text-[#8B1E3F]" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#D3B5E5] to-transparent w-20"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              ¿Listo para Transformar
              <span className="block text-[#F8C8DC]">tu Espacio?</span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-pink-100 mb-16 max-w-3xl mx-auto leading-relaxed">
            Contáctanos para consultas personalizadas, pedidos especiales o
            cualquier pregunta sobre nuestros
            <span className="text-[#F8C8DC] font-semibold">
              {" "}
              productos únicos
            </span>
          </p>

          {/* Enhanced Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                href: "https://wa.me/34691453544",
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Respuesta inmediata",
                color: "from-[#BEE8CC] to-[#a8d4b8]",
                target: "_blank",
              },
              {
                href: "tel:+34691453544",
                icon: Phone,
                title: "Teléfono",
                description: "Llamada directa",
                color: "from-[#F8C8DC] to-[#f5b8d1]",
                target: undefined,
              },
              {
                href: "https://instagram.com/clover_resinstudio",
                icon: Instagram,
                title: "Instagram",
                description: "Síguenos",
                color: "from-[#D3B5E5] to-[#c19ed6]",
                target: "_blank",
              },
              {
                href: "mailto:ceci@cloverstudio.es",
                icon: Mail,
                title: "Email",
                description: "Consultas formales",
                color: "from-[#FDE68A] to-[#fcd34d]",
                target: undefined,
              },
            ].map((contact, index) => (
              <Link
                key={index}
                href={contact.href}
                target={contact.target}
                className="group relative"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-white/60 relative overflow-hidden">
                  {/* Enhanced background decoration */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#F8C8DC]/10 to-[#D3B5E5]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-all duration-500">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-[#F8C8DC] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#D3B5E5] rounded-full"></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    {/* Enhanced icon */}
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/50`}
                      >
                        <contact.icon className="w-10 h-10 text-[#8B1E3F] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${contact.color} opacity-20 rounded-2xl scale-95 group-hover:scale-110 transition-all duration-500 -z-10 blur-sm`}
                      ></div>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#8B1E3F] group-hover:to-[#F8C8DC] group-hover:bg-clip-text transition-all duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-[#999999] group-hover:text-gray-700 transition-colors duration-300 font-medium">
                      {contact.description}
                    </p>
                  </div>

                  {/* Subtle corner accent */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-6 h-6 border-l-2 border-b-2 border-[#F8C8DC] rounded-bl-lg"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Enhanced Main CTA */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/60 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#F8C8DC]/15 to-[#D3B5E5]/15 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#BEE8CC]/10 to-[#FDE68A]/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Star className="w-6 h-6 text-[#F8C8DC]" />
                <div className="h-px bg-gradient-to-r from-[#F8C8DC] via-[#D3B5E5] to-[#BEE8CC] w-16"></div>
                <Sparkles className="w-5 h-5 text-[#D3B5E5]" />
                <div className="h-px bg-gradient-to-r from-[#BEE8CC] via-[#D3B5E5] to-[#F8C8DC] w-16"></div>
                <Heart className="w-6 h-6 text-[#BEE8CC]" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                ¿Necesitas algo
                <span className="text-transparent bg-gradient-to-r from-[#8B1E3F] to-[#F8C8DC] bg-clip-text">
                  {" "}
                  personalizado?
                </span>
              </h3>

              <p className="text-lg md:text-xl text-[#999999] mb-10 leading-relaxed max-w-2xl mx-auto">
                Creamos productos únicos según tus necesidades. Cuéntanos tu
                idea y la haremos realidad con el mismo
                <span className="text-[#8B1E3F] font-semibold">
                  {" "}
                  cariño artesanal
                </span>{" "}
                de siempre.
              </p>

              <Link
                href="https://wa.me/34691453544?text=Hola! Me interesa un producto personalizado"
                target="_blank"
                className="group relative inline-flex"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B1E3F] to-[#7a1a37] rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-[#8B1E3F] hover:bg-[#7a1a37] text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-xl transform group-hover:-translate-y-2 group-hover:scale-105 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  Solicitar Cotización Personalizada
                </div>
              </Link>
            </div>
          </div>

          {/* Enhanced features section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Heart,
                title: "Hecho con Amor",
                description:
                  "Cada producto es único y creado artesanalmente con dedicación y pasión",
                color: "from-[#F8C8DC] to-[#f5b8d1]",
              },
              {
                icon: Sparkles,
                title: "Calidad Premium",
                description:
                  "Ingredientes naturales selectos y técnicas tradicionales perfeccionadas",
                color: "from-[#BEE8CC] to-[#a8d4b8]",
              },
              {
                icon: Star,
                title: "100% Personalizable",
                description:
                  "Adaptamos cada detalle exactamente a tu gusto y necesidades específicas",
                color: "from-[#FDE68A] to-[#fcd34d]",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/30`}
                  >
                    <feature.icon className="w-8 h-8 text-[#8B1E3F] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div
                    className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mx-auto opacity-30 scale-0 group-hover:scale-125 transition-transform duration-500 blur-sm`}
                  ></div>
                </div>

                <h3 className="font-bold text-white mb-3 text-xl group-hover:text-[#F8C8DC] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-pink-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
