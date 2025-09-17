"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Gift, Sparkles, Star, Heart, Zap } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para suscribir al newsletter
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#8B1E3F] via-[#7a1a37] to-[#6b1830] relative overflow-hidden">
      {/* Enhanced floating elements */}
      <div className="absolute top-16 left-12 opacity-15 animate-float">
        <Sparkles className="w-12 h-12 text-[#F8C8DC]" />
      </div>
      <div
        className="absolute bottom-20 right-16 opacity-15 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Star className="w-8 h-8 text-[#D3B5E5]" />
      </div>
      <div
        className="absolute top-1/3 right-1/4 opacity-10 animate-soft-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        <Heart className="w-6 h-6 text-[#BEE8CC]" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-10 animate-soft-pulse">
        <Zap className="w-4 h-4 text-[#FDE68A]" />
      </div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#F8C8DC] opacity-8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-16 w-80 h-80 bg-[#D3B5E5] opacity-6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#BEE8CC] opacity-4 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced header with decorative elements */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[#F8C8DC] to-transparent w-20"></div>
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F8C8DC] to-[#f5b8d1] rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <Gift className="w-12 h-12 text-[#8B1E3F]" />
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-[#F8C8DC] rounded-full mx-auto opacity-30 scale-0 animate-pulse blur-sm"></div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#D3B5E5] to-transparent w-20"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Únete a Nuestra
              <span className="block text-[#F8C8DC]">Comunidad Especial</span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Recibe ofertas exclusivas, nuevos productos y tips para crear
            <span className="text-[#F8C8DC] font-semibold">
              {" "}
              ambientes únicos
            </span>{" "}
            en tu hogar
          </p>

          {!isSubscribed ? (
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/60 relative overflow-hidden max-w-2xl mx-auto mb-16">
              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#F8C8DC]/15 to-[#D3B5E5]/15 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#BEE8CC]/10 to-[#FDE68A]/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 relative group">
                      <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-[#8B1E3F] transition-colors duration-300" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu email aquí..."
                        className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-[#F8C8DC] focus:ring-4 focus:ring-[#F8C8DC]/20 outline-none text-gray-900 text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <button type="submit" className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F8C8DC] to-[#f5b8d1] rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F] px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg transform group-hover:-translate-y-1 whitespace-nowrap">
                        Suscribirme
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-6">
                    <div className="w-2 h-2 bg-[#F8C8DC] rounded-full"></div>
                    <p className="text-sm text-gray-600 font-medium">
                      Prometemos no enviarte spam. Solo contenido valioso y
                      ofertas especiales.
                    </p>
                    <div className="w-2 h-2 bg-[#D3B5E5] rounded-full"></div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-[#BEE8CC] to-[#a8d4b8] text-[#8B1E3F] p-8 rounded-3xl max-w-2xl mx-auto mb-16 shadow-2xl relative overflow-hidden">
              {/* Success decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-[#8B1E3F]" />
                  <div className="h-px bg-[#8B1E3F] w-12"></div>
                  <Sparkles className="w-6 h-6 text-[#8B1E3F]" />
                  <div className="h-px bg-[#8B1E3F] w-12"></div>
                  <Star className="w-8 h-8 text-[#8B1E3F]" />
                </div>
                <h3 className="font-bold text-2xl mb-4">
                  ¡Bienvenido a la familia Clover!
                </h3>
                <p className="text-lg leading-relaxed">
                  Te hemos enviado un email de confirmación con un descuento
                  especial del 10%
                </p>
              </div>
            </div>
          )}

          {/* Enhanced Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "10%",
                iconBg: "from-[#F8C8DC] to-[#f5b8d1]",
                title: "Descuento de Bienvenida",
                description: "En tu primera compra superior a 30€",
              },
              {
                icon: Mail,
                iconBg: "from-[#BEE8CC] to-[#a8d4b8]",
                title: "Ofertas Exclusivas",
                description: "Solo para miembros de la comunidad",
              },
              {
                icon: Gift,
                iconBg: "from-[#FDE68A] to-[#fcd34d]",
                title: "Acceso Anticipado",
                description: "A nuevos productos y colecciones limitadas",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${benefit.iconBg} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/30`}
                  >
                    {typeof benefit.icon === "string" ? (
                      <span className="text-[#8B1E3F] font-bold text-xl">
                        {benefit.icon}
                      </span>
                    ) : (
                      <benefit.icon className="w-10 h-10 text-[#8B1E3F] group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                  <div
                    className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${benefit.iconBg} rounded-2xl mx-auto opacity-30 scale-0 group-hover:scale-125 transition-transform duration-500 blur-sm`}
                  ></div>
                </div>

                <h4 className="font-bold text-white mb-3 text-xl group-hover:text-[#F8C8DC] transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-pink-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional mini-stats */}
          <div className="flex justify-center gap-12 mt-16 flex-wrap">
            {[
              { number: "2K+", label: "Suscriptores Felices" },
              { number: "15%", label: "Descuentos Exclusivos" },
              { number: "1x", label: "Email Semanal" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-[#F8C8DC] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-pink-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
